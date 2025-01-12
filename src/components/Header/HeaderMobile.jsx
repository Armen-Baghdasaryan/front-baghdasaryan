import React, { useEffect, useState } from "react";
import "./header.scss";

// icons
import headerLogo from "/src/assets/icons/header-logo.svg";
import searchIcon from "/src/assets/icons/search-icon.svg";
import burgerIcon from "/src/assets/icons/burger-icon.svg";
import closeIcon from "/src/assets/icons/close-icon.svg";

const HeaderMobile = ({ headerItems, openSearch }) => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const handleItemClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  return (
    <div className="header__mobile">
      <div className="container header__container">
        <img
          src={burgerIcon}
          width={24}
          height={16}
          alt="burger"
          onClick={openMenu}
        />
        <img
          src={headerLogo}
          width={162}
          height={24}
          alt="logo"
          className={visible ? "hide" : "show"}
        />
        <img
          src={searchIcon}
          width={16}
          height={16}
          alt="search"
          onClick={openSearch}
        />
      </div>
      <div
        className={`header__menu ${visible ? "header__menu--visible" : ""}`}
        onClick={closeMenu}
      >
        <div
          className="header__menu-inner"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="header__menu-head">
            <div className="container header__container">
              <img src={headerLogo} width={162} height={24} alt="logo" />
              <img
                src={closeIcon}
                width={18}
                height={18}
                alt="logo"
                onClick={closeMenu}
              />
            </div>
          </div>
          <ul className="container header__menu-items">
            {headerItems?.map((item, idx) => (
              <li
                key={idx}
                className={`header__menu-item ${
                  activeIndex === idx ? "menu__item-active" : ""
                }`}
                onClick={() => handleItemClick(idx)}
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
                <ul
                  className="menu__sub-items"
                  onClick={(e) => e.stopPropagation()}
                >
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
  );
};

export default HeaderMobile;
