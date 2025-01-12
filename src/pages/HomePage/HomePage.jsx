import React, { useState } from "react";
import PostItem from "../../components/PostItem/PostItem";
import PostPopup from "../../components/PostPopup/PostPopup";
import "./home-page.scss";

const HomePage = ({ posts }) => {
  const [currentPost, setCurrentPost] = useState(null);
  const [open, setOpen] = useState(false);

  const popupOpen = () => {
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };

  const onPostClick = (id) => {
    const post = posts.find((post) => post.id === id);
    setCurrentPost(post);
    popupOpen()
  };

  return (
    <section className="home__page">
      <div className="container home__container">
        <ul className="post__items">
          {posts?.map((post, idx) => (
            <PostItem key={idx} post={post} onPostClick={onPostClick} />
          ))}
        </ul>
      </div>
      <PostPopup post={currentPost} open={open} popupClose={popupClose} />
    </section>
  );
};

export default HomePage;
