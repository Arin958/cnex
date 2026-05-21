import { useEffect } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, onClose, onLinkClick, menuItems }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);



  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar Drawer */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/logo.png" alt="logo" className="sidebar-logo-image" />
          </div>
          <button className="close-sidebar" onClick={onClose}>
            &times;
          </button>
        </div>

        <ul className="sidebar-nav-links">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-links">
              <NavLink
                className="sidebar-redirect-link"
                to={item.href}
                onClick={onLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <button className="sidebar-btn" onClick={onClose}>
            Download Now
          </button>
        </div>
      </div>
    </>
  );
}
