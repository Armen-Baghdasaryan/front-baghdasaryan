import React from "react";
import "./post-popup.scss";

const PostPopup = ({ post, open, popupClose }) => {
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
