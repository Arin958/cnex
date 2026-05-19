import { useEffect } from "react";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose, onLinkClick }) {
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

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#form", label: "Contact Us" },
  ];

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
              <a
                className="sidebar-redirect-link"
                href={item.href}
                onClick={(e) => onLinkClick(e, item.href)}
              >
                {item.label}
              </a>
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
