import React, { useContext } from "react";
import Logo from "../img/sociophilia-logo-1.png";

import "../css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

const Navbar = ({ login, searchValue, setShowSearch, setSearchValue }) => {
  const navigate = useNavigate();
  const { setModalOpen } = useContext(LoginContext);
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      return [
        <>
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
          <Link to={`profile/${loggedUser._id}`}>
            <p className="nav-item">Profile</p>
          </Link>
          <Link to="createPost">
            <p>Create Post </p>
          </Link>
          <Link to="followingPost">
            <p>My Following</p>
          </Link>
          <Link to="privacy">
            <p>Privacy</p>
          </Link>
          <Link to="writetous">
            <p>Help</p>
          </Link>
          <Link to={""}>
            <button
              className="primaryBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Log Out
            </button>
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link to="signup">
            <p className="nav-item">SignUp</p>
          </Link>
          <Link to="signin">
            <p className="nav-item">Signin</p>
          </Link>
        </>,
      ];
    }
  };
  return (
    <div>
      <div className="navbar">
        <div
          className="n-one"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="insta-logo"
            src={Logo}
            alt="logo"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="nav-list">{loginStatus()}</div>
      </div>
    </div>
  );
};

export default Navbar;
