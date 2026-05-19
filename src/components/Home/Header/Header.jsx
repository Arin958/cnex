import { useState } from "react";

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

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeSidebar();
    }
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <a href="#" className="logo-link">
              <img src="/logo.png" alt="logo" className="logo-image" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li className="links">
              <a className="redirect-link" href="#hero">Home</a>
            </li>
            <li className="links">
              <a className="redirect-link" href="#about">About</a>
            </li>
            <li className="links">
              <a className="redirect-link" href="#faq">FAQ</a>
            </li>
            <li className="links">
              <a className="redirect-link" href="#form">Contact Us</a>
            </li>
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
      />
    </>
  );
}