import { useState } from "react";

import { NavLink } from "react-router-dom";

import "./Header.css";

import Sidebar from "../../Sidebar/Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLinkClick = () => {
    closeSidebar();
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/form", label: "Contact Us" },
  ];

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <NavLink to="/" className="logo-link">
              <img src="/logo.png" alt="logo" className="logo-image" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}

          <ul className="nav-links">
            {menuItems.map((item, index) => (
              <li key={index} className="links">
                <NavLink className="redirect-link" to={item.href}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="button-container">
            <button className="btn">Download Now</button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="menu-toggle" onClick={toggleSidebar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        onLinkClick={handleLinkClick}
        menuItems={menuItems}
      />
    </>
  );
}
