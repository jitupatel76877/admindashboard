"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import "../../../public/assets/css/style.css";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const isAdminRoute = pathname.startsWith("/admin");
  // const [isAdmin, setIsAdmin] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
      </head>
      <body id="body-pd" className="body-content">
        <AdminHeader />
        <AdminSidebar />
        {children}
        <AdminFooter />

        <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="/assets/js/script.js"></script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
          defer
        ></script>
      </body>
    </html>
  );
}
