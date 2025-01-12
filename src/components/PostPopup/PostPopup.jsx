import React, { useEffect } from "react";
import "./post-popup.scss";

const PostPopup = ({ post, open, popupClose }) => {
  
  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <div
      className={`popup__wrapper ${open ? "popup__wrapper--open" : ""}`}
      onClick={popupClose}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <div className="post__info">
          <h3>{post?.title}</h3>
          <p>{post?.fullDescription}</p>
        </div>
        <button className="popup__btn" onClick={popupClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PostPopup;
