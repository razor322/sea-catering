import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Utensils,
  Calendar,
  DollarSign,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function SidebarAdmin() {
  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/customers", label: "Customers", icon: Users },
    { href: "/admin/meal-plans", label: "Meal Plans", icon: Utensils },
    { href: "/admin/deliveries", label: "Deliveries", icon: Calendar },
    { href: "/admin/revenue", label: "Revenue", icon: DollarSign },
    { href: "/admin/notifications", label: "Notifications", icon: Bell },
    { href: "/admin/settings", label: "Settings", icon: Settings },
    { href: "/admin/support", label: "Support", icon: HelpCircle },
  ];

  return (
    <aside className="w-64 border-r bg-white p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-green-600">SEA Catering</h1>
        <span className="mt-1 inline-block rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-600">
          Admin Panel
        </span>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-200" />
        <div>
          <p className="font-semibold">SEA Catering Admin</p>
          <p className="text-sm text-gray-500">admin@mail.com</p>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-800"
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
