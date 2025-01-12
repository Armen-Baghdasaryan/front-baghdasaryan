import React from "react";
import "./search-input.scss";

const SearchInput = ({ search, onBlur, inputRef, handleSearch }) => {
  return (
    <div className="input__wrapper">
      <div className="container relative">
        <input
          ref={inputRef}
          className={`search__input ${search ? "search__input--active" : ""}`}
          type="text"
          placeholder="Search..."
          onBlur={onBlur}
          onChange={e => handleSearch(e)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
