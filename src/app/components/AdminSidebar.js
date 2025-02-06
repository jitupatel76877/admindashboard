import React from "react";
import Image from "next/image";
import "../../../public/assets/css/style.css";
import SUBSCRIPTION from "../../../public/assets/img/subscription_icon.png";
import CHAT from "../../../public/assets/img/chatting.png";
import TC from "../../../public/assets/img/t&c.png";
import PRIVACY_POLICY from "../../../public/assets/img/privacy-policy-pp.png";
import SERVICE from "../../../public/assets/img/services.png";
import LOGOUT from "../../../public/assets/img/logout.png";
import Link from "next/link";


const AdminSidebar = () => {
  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div>
          <Link href="/admin" className="nav_logo text-white">
            <i className="bi bi-house-dash-fill text-white"></i>
            <span className="nav_logo-name">Dashboard</span>
          </Link>

          <Link href="/admin/myscheduler" className="nav_logo text-white">
          <Image
                  src={SUBSCRIPTION}
                  alt="Picture of the author"
                  width={18}
                  height={19}
                  className="text-white list_icon"
                />
            <span className="nav_logo-name">Subscription</span>
          </Link>

          <Link href="/admin/createscheduler" className="nav_logo text-white">
          <Image
                  src={CHAT}
                  alt="Picture of the author"
                  width={18}
                  height={19}
                  className="text-white list_icon"
                />
            <span className="nav_logo-name">Chat</span>
          </Link>


          <Link href="/admin/terms_and_conditions" className="nav_logo text-white">
          <Image
                  src={TC}
                  alt="Picture of the author"
                  width={18}
                  height={19}
                  className="text-white list_icon"
                />
            <span className="nav_logo-name">Terms and Conditions</span>
          </Link>

          <Link href="/admin/privacy-policy" className="nav_logo text-white">
          <Image
                  src={PRIVACY_POLICY}
                  alt="Picture of the author"
                  width={18}
                  height={19}
                  className="text-white list_icon"
                />
            <span className="nav_logo-name">Privacy Policy</span>
          </Link>

          <Link href="/admin/support" className="nav_logo text-white">
          <Image
                  src={SERVICE}
                  alt="Picture of the author"
                  width={18}
                  height={19}
                  className="text-white list_icon"
                />
            <span className="nav_logo-name">Support</span>
          </Link>

          <Link href="/" className="nav_logo text-white">
          <Image
                  src={LOGOUT}
                  alt="Picture of the author"
                  width={18}
                  height={19}
                  className="text-white list_icon"
                />
            <span className="nav_logo-name">Logout</span>
          </Link>
       
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
