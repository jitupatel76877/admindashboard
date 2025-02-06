"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "./layouts/AdminLayout";
import FrontLayout from "./layouts/FrontLayout";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  return <FrontLayout>{children}</FrontLayout>;
}
