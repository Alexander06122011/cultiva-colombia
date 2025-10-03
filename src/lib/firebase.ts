
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.V2_NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.V2_NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.V2_NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.V2_NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.V2_NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.V2_NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Verifica que todas las variables de entorno necesarias estén presentes.
export const firebaseEnabled =
  !!firebaseConfig.apiKey &&
  !!firebaseConfig.authDomain &&
  !!firebaseConfig.projectId;

// Función memoizada para obtener la instancia de la aplicación Firebase.
const getInitializedApp = (): FirebaseApp => {
  if (!firebaseEnabled) {
    throw new Error("La configuración de Firebase no está completa. Revisa tus variables de entorno.");
  }
  // getApps() comprueba si una aplicación ya está inicializada.
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
};

export const getFirebaseAuth = (): Auth => {
  try {
    const app = getInitializedApp();
    return getAuth(app);
  } catch(e) {
      if (!firebaseEnabled) {
        // This is a special case to allow the app to run without firebase credentials for demo purposes.
        // It will be caught and handled in the AuthProvider.
        return null as any; 
      }
      throw e;
  }
};

export const getFirebaseFirestore = (): Firestore | null => {
  try {
    const app = getInitializedApp();
    return getFirestore(app);
  } catch(e) {
      if (!firebaseEnabled) {
        return null;
      }
      throw e;
  }
};
