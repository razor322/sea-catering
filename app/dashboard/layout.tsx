// app/dashboard/layout.tsx

import { ReactNode } from "react";
import Layout from "../components/layout/layout";

export default function Dashboard({ children }: { children: ReactNode }) {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
}
