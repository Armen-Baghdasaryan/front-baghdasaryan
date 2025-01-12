import React, { useEffect, useRef, useState } from "react";
import "./header.scss";

// icons
import headerLogo from "/src/assets/icons/header-logo.svg";
import searchIcon from "/src/assets/icons/search-icon.svg";
import SearchInput from "../SearchInput/SearchInput";
import HeaderMobile from "./HeaderMobile";

const Header = ({ headerItems, handleSearch, resetSearch }) => {
  const [search, setSearch] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const inputRef = useRef(null);
  const lastScroll = useRef(0);

  const openSearch = () => {
    setSearch(true);
    inputRef.current.focus();
  };

  const closeSearch = () => {
    setSearch(false);
    inputRef.current.value = "";
    resetSearch();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 200) {
        if (currentScroll > lastScroll.current) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }
      } else {
        setHideHeader(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header__wrapper ${hideHeader ? "header__hide" : ""}`}>
      <HeaderMobile headerItems={headerItems} openSearch={openSearch} />
      <div className="header__desktop">
        <div className="header__head">
          <div className="container header__head-container">
            <div></div>
            <img src={headerLogo} width={181} height={27} alt="logo" />
            <img
              src={searchIcon}
              width={16}
              height={16}
              alt="search"
              onClick={openSearch}
              className="pointer"
            />
          </div>
        </div>
        <div className="header__items">
          <div className="container">
            <ul className="header__menu-items">
              {headerItems?.map((item, idx) => (
                <li
                  className={`header__menu-item ${
                    item.sub.length > 0 ? "menu__hover-item" : ""
                  }`}
                  key={idx}
                >
                  <div className="menu__item-title">
                    <p>{item?.name}</p>
                    {item.sub.length > 0 && (
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeLinecap="square"
                        />
                      </svg>
                    )}
                  </div>
                  <ul className="menu__sub-items">
                    {item.sub.length > 0 &&
                      item.sub.map((item, idx) => (
                        <li key={idx} className="menu__sub-item">
                          <p>{item?.name}</p>
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeLinecap="square"
                            />
                          </svg>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SearchInput
        search={search}
        onBlur={closeSearch}
        inputRef={inputRef}
        handleSearch={handleSearch}
      />
    </header>
  );
};

export default Header;
