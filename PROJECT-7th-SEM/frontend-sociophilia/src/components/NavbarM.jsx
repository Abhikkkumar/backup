import React from "react";
import Logo from "../img/sociophilia-logo-1.png";
import "../css/navbar.css";
// import { Link, useNavigate } from "react-router-dom";
// import { LoginContext } from "../contexts/LoginContext";

export default function NavbarM({
  searchValue,
  setShowSearch,
  setSearchValue,
  setDropdown,
}) {
  return (
    <div className="navbarM">
      <img src={Logo} alt="" />
      <div className="home-search">
        <input
          type="text"
          value={searchValue}
          placeholder="Search user by the name"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") setShowSearch(true);
          }}
        />
      </div>
      <i
        class="fa-solid fa-bars-staggered"
        onClick={() => {
          setDropdown((a) => !a);
        }}
      ></i>
    </div>
  );
}
