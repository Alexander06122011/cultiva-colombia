
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Map,
  FlaskConical,
  ScanLine,
  BookOpen,
  Settings,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { CultivaColombiaIcon } from "./icons";
import { useAuth } from "@/context/auth-context";

const menuItems = [
  { href: "/dashboard", label: "Mi Huerto", icon: LayoutDashboard },
  { href: "/map", label: "Mapa de Cultivos", icon: Map },
  { href: "/recommendation", label: "Recomendador", icon: FlaskConical },
  { href: "/detect", label: "Diagnóstico IA", icon: ScanLine },
  { href: "/resources", label: "Recursos", icon: GraduationCap },
  { href: "/glossary", label: "Glosario", icon: BookOpen },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground">
            <CultivaColombiaIcon className="size-8 text-primary" />
            <span className="text-xl font-bold font-headline tracking-tight">
                CultivaColombia
            </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href)}
                onClick={() => setOpenMobile(false)}
              >
                <Link href={item.href}>
                  <item.icon />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith('/contact')}
              onClick={() => setOpenMobile(false)}
            >
              <Link href="/contact">
                <MessageSquare />
                Contacto
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith('/settings')}
              onClick={() => setOpenMobile(false)}
            >
              <Link href="/settings">
                <Settings />
                Ajustes
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
