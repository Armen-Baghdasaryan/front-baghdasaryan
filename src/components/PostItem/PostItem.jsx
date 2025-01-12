import React from "react";
import "./post-item.scss";

const PostItem = ({post, onPostClick}) => {
  const {autor, date, img, img_2x, tags, text, title, views, id} = post

  return (
    <li className="post__item" onClick={() => onPostClick(id)}>
      <img
        src={img}
        srcSet={`${img} 1x, ${img_2x} 2x`}
        alt="image"
      />
      <p className="item__tags">{tags}</p>
      <h3 className="item__title">{title}</h3>
      <div className="item__author">
        <p>{autor}</p>
        <div className="author__circle" />
        <p className="author__info">{date}</p>
        <div className="author__circle" />
        <p className="author__info">{views} Views</p>
      </div>
      <p className="item__description">{text}</p>
    </li>
  );
};

export default PostItem;
