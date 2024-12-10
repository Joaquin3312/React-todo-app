import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.className.includes("Modal-overlay")) {
      onClose();
    }
  };

  return createPortal(
    <div className="Modal-overlay" onClick={handleOutsideClick}>
      <div className="Modal">
        <button className="Modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export { Modal };
