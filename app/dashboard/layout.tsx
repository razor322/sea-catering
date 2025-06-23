// app/dashboard/layout.tsx

import { ReactNode } from "react";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div>
      <aside>
        {/* Sidebar navigasi user */}
        <ul>
          <li>
            <a href="/dashboard">Home</a>
          </li>
          <li>
            <a href="/dashboard/orders">Orders</a>
          </li>
          <li>
            <a href="/dashboard/settings">Settings</a>
          </li>
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
}
