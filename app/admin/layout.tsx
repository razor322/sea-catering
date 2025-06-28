import { ReactNode } from "react";
import SidebarAdmin from "../components/sections/admin/SidebarAdmin";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
