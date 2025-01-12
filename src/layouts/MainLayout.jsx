import React, { useEffect, useState, useRef } from "react";
import HomePage from "../pages/HomePage/HomePage";
import Header from "../components/Header/Header";
import { headerItems } from "../services/category-service";
import { getPosts } from "../services/post-service";
import { debounce } from "../utils/debounce.helper";

const MainLayout = () => {
  const [posts, setPosts] = useState(null);
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setAllPosts(data);
    });
  }, []);

  const handleSearch = (e) => {
    const targetValue = e.target.value.toLowerCase();
    if (allPosts) {
      setPosts(
        allPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(targetValue) ||
            post.text.toLowerCase().includes(targetValue) ||
            post.fullDescription.toLowerCase().includes(targetValue)
        )
      );
    }
  };

  const debouncedSearch = debounce(handleSearch, 300);

  const resetSearch = () => {
    setPosts(allPosts);
  };

  return (
    <>
      <Header
        headerItems={headerItems}
        handleSearch={debouncedSearch}
        resetSearch={resetSearch}
      />
      <HomePage posts={posts} />
    </>
  );
};

export default MainLayout;
