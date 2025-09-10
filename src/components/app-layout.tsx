
"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/sidebar-nav";
import { Header } from "@/components/header";

const NO_LAYOUT_ROUTES = ['/', '/login', '/signup', '/forgot-password'];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (NO_LAYOUT_ROUTES.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <div className="relative flex flex-1">
        <SidebarNav />
        <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 p-4 md:p-6 lg:p-8">
                {children}
            </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
