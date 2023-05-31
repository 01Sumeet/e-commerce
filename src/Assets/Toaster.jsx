import React, { useState } from "react";
import "./Toaster.css"; // Import CSS file for styling

const ToastMessage = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <div className={`wrapper ${show ? "show" : ""}`}>
      <div className="toast success">
        <div className="outer-container">
          <i className="fas fa-check-circle" />
        </div>
        <div className="inner-container">
          <p>Success</p>
          <p>Your changes saved successfully</p>
        </div>
        <button onClick={handleClose}>×</button>
      </div>
      <div className="toast error">
        <div className="outer-container">
          <i className="fas fa-times-circle" />
        </div>
        <div className="inner-container">
          <p>Error</p>
          <p>Error has occured while saving changes.</p>
        </div>
        <button>×</button>
      </div>
      <div className="toast info">
        <div className="outer-container">
          <i className="fas fa-info-circle" />
        </div>
        <div className="inner-container">
          <p>Info</p>
          <p>New settings available on your account.</p>
        </div>
        <button>×</button>
      </div>
      <div className="toast warning">
        <div className="outer-container">
          <i className="fas fa-exclamation-circle" />
        </div>
        <div className="inner-container">
          <p>Warning</p>
          <p>Username you have entered is invalid.</p>
        </div>
        <button>×</button>
      </div>
    </div>
  );
};

export default ToastMessage;
