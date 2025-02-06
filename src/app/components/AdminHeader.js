import React from 'react';
import "../../../public/assets/css/style.css";


const AdminHeader = () => {
    return (
        <header className="header header_bg-color" id="header">
            <div className="header_toggle"> <i className="bi bi-list text-white" id="header-toggle"></i> </div>
            <div className="header_img"> <i className="bi bi-bell-fill text-white" style={{padding:'20%'}}></i> </div>
        </header>
    );
}

export default AdminHeader;
