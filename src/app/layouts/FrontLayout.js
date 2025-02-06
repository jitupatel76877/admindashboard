"use client";

import FrontHeader from "../components/FrontHeader";
import FrontNavigation from "../components/FrontNavigation";
import FrontFooter from "../components/FrontFooter";

export const metadata = {
  title: "Dashboard",
 description: "Dashboard",

};
export default function FrontLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8"/>
      <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="/assets/css/style.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body id="body-pd">
       <div >
       <FrontHeader />
        <FrontNavigation />
        <main>{children}</main>
        <FrontFooter />
       </div>

        <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="/assets/js/script.js"></script>
      </body>
      
    </html>
  );
}
