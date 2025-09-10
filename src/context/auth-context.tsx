
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User, updateProfile, deleteUser } from 'firebase/auth';
import { getFirebaseAuth, getFirebaseFirestore, firebaseEnabled } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import type { UserCrop, Crop, UserProfile } from '@/types';
import { useRouter } from 'next/navigation';
import { CROP_DATA } from '@/lib/data';
import { differenceInDays, parseISO } from 'date-fns';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  userCrops: UserCrop[];
  addCropToUser: (cropId: string) => Promise<void>;
  removeCropFromUser: (cropId: string) => Promise<void>;
  updateCropStatus: (cropId: string, status: 'active' | 'paused') => Promise<void>;
  restartCropProgress: (cropId: string) => Promise<void>;
  updateCropNotes: (cropId: string, notes: string) => Promise<void>;
  updateUserProfile: (name: string) => Promise<void>;
  deleteUserAccount: () => Promise<void>;
  authEnabled: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [userCrops, setUserCrops] = useState<UserCrop[]>([]);
  const authEnabled = firebaseEnabled;
  const router = useRouter();

  useEffect(() => {
    if (authEnabled) {
      const auth = getFirebaseAuth();
      if (!auth) {
        setLoading(false);
        return;
      }
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser);
        const db = getFirebaseFirestore();
        if (currentUser && db) {
          try {
            const userDocRef = doc(db, 'users', currentUser.uid);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setUserCrops(userData.userCrops || []);
              setProfile({
                displayName: userData.displayName,
                email: userData.email,
                role: userData.role || 'enthusiast',
              });
            } else {
              // This case might happen if Firestore doc creation fails during signup
              const newUserProfile: UserProfile = {
                  displayName: currentUser.displayName || '',
                  email: currentUser.email || '',
                  role: 'enthusiast',
              };
              await setDoc(userDocRef, { 
                ...newUserProfile,
                userCrops: [] 
              });
              setUserCrops([]);
              setProfile(newUserProfile);
            }
          } catch (error) {
            console.error("Error fetching user data from Firestore:", error);
            setUserCrops([]);
            setProfile(null);
          }
        } else {
          setUserCrops([]);
          setProfile(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      try {
        const localCrops = localStorage.getItem('userCrops');
        if (localCrops) {
          setUserCrops(JSON.parse(localCrops));
        }
      } catch (error) {
        console.error("Failed to parse userCrops from localStorage", error);
      }
      setLoading(false);
    }
  }, [authEnabled]);

  // Effect for handling notifications
  useEffect(() => {
    if (typeof window === 'undefined' || !('Notification' in window) || Notification.permission !== 'granted') {
      return;
    }

    const activeCrops = userCrops.filter(c => c.status === 'active');
    
    activeCrops.forEach(userCrop => {
      const cropData = CROP_DATA.find(c => c.id === userCrop.id);
      if (!cropData || !cropData.notifications) return;

      // Irrigation Reminder (example: every 3 days)
      const lastNotifiedKey = `irrigation_notified_${userCrop.id}`;
      const lastNotified = localStorage.getItem(lastNotifiedKey);
      const daysSincePlanting = differenceInDays(new Date(), parseISO(userCrop.addedDate));
      
      const shouldNotify = !lastNotified || differenceInDays(new Date(), parseISO(lastNotified)) >= 3;

      if (shouldNotify && daysSincePlanting > 0) {
        const title = "Recordatorio de Riego";
        const body = cropData.notifications.irrigation?.replace('{cropName}', cropData.name) || `Tu ${cropData.name} podría necesitar agua.`;
        
        new Notification(title, { body });

        localStorage.setItem(lastNotifiedKey, new Date().toISOString());
      }
    });

  }, [userCrops]);


  const updateUserProfile = async (name: string) => {
    const auth = getFirebaseAuth();
    if (!auth?.currentUser) throw new Error("No hay un usuario autenticado.");
    
    const db = getFirebaseFirestore();
    if (!db) throw new Error("La base de datos no está configurada.");

    try {
      await updateProfile(auth.currentUser, { displayName: name });
      
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, { displayName: name });
      
      // Update local state
      if (profile) {
        setProfile({ ...profile, displayName: name });
      }

      const freshUser = auth.currentUser;
      await freshUser?.reload();
      setUser(auth.currentUser);

    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      throw new Error("No se pudo actualizar el perfil.");
    }
  };

  const deleteUserAccount = async () => {
    const auth = getFirebaseAuth();
    const currentUser = auth?.currentUser;
    if (!currentUser) throw new Error("No hay un usuario autenticado.");
    
    const db = getFirebaseFirestore();
    if (!db) throw new Error("La base de datos no está configurada.");

    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      await deleteDoc(userDocRef);

      await deleteUser(currentUser);

      router.push('/');
    } catch (error: any) {
      console.error("Error al eliminar la cuenta:", error);
      if (error.code === 'auth/requires-recent-login') {
        throw new Error("Esta operación es sensible y requiere una autenticación reciente. Por favor, vuelve a iniciar sesión e inténtalo de nuevo.");
      }
      throw new Error("No se pudo eliminar la cuenta.");
    }
  };

  const addCropToUser = async (cropId: string) => {
    if (userCrops.some(c => c.id === cropId)) return;
    const newCrop: UserCrop = {
      id: cropId,
      addedDate: new Date().toISOString(),
      status: 'active',
      progress: 0, // Initial progress
      notes: '',
    };
    const updatedCrops = [...userCrops, newCrop];
    setUserCrops(updatedCrops);

    if (authEnabled && user) {
      const db = getFirebaseFirestore();
      if (db) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          await updateDoc(userDocRef, { userCrops: updatedCrops });
        } catch (error) {
          console.error("Failed to add crop in Firestore:", error);
        }
      }
    } else if (!authEnabled) {
      localStorage.setItem('userCrops', JSON.stringify(updatedCrops));
    }
  };

  const removeCropFromUser = async (cropId: string) => {
    const updatedCrops = userCrops.filter(c => c.id !== cropId);
    setUserCrops(updatedCrops);

    if (authEnabled && user) {
      const db = getFirebaseFirestore();
      if (db) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          await updateDoc(userDocRef, { userCrops: updatedCrops });
        } catch (error) {
          console.error("Failed to remove crop in Firestore:", error);
        }
      }
    } else if (!authEnabled) {
      localStorage.setItem('userCrops', JSON.stringify(updatedCrops));
    }
  };

  const updateCropStatus = async (cropId: string, status: 'active' | 'paused') => {
    const updatedCrops = userCrops.map(crop => 
      crop.id === cropId ? { ...crop, status } : crop
    );
    setUserCrops(updatedCrops);
     if (authEnabled && user) {
      const db = getFirebaseFirestore();
      if (db) {
        await updateDoc(doc(db, 'users', user.uid), { userCrops: updatedCrops });
      }
    } else if (!authEnabled) {
      localStorage.setItem('userCrops', JSON.stringify(updatedCrops));
    }
  };

  const restartCropProgress = async (cropId: string) => {
    const updatedCrops = userCrops.map(crop => 
      crop.id === cropId ? { ...crop, addedDate: new Date().toISOString(), status: 'active' } : crop
    );
    setUserCrops(updatedCrops);
    if (authEnabled && user) {
      const db = getFirebaseFirestore();
      if (db) {
        await updateDoc(doc(db, 'users', user.uid), { userCrops: updatedCrops });
      }
    } else if (!authEnabled) {
      localStorage.setItem('userCrops', JSON.stringify(updatedCrops));
    }
  };

  const updateCropNotes = async (cropId: string, notes: string) => {
    const updatedCrops = userCrops.map(crop =>
      crop.id === cropId ? { ...crop, notes } : crop
    );
    setUserCrops(updatedCrops);
    if (authEnabled && user) {
      const db = getFirebaseFirestore();
      if (db) {
        await updateDoc(doc(db, 'users', user.uid), { userCrops: updatedCrops });
      }
    } else if (!authEnabled) {
      localStorage.setItem('userCrops', JSON.stringify(updatedCrops));
    }
  };


  const value = { user, profile, loading, userCrops, addCropToUser, removeCropFromUser, updateUserProfile, deleteUserAccount, authEnabled, updateCropStatus, restartCropProgress, updateCropNotes };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
