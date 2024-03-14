import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import "./dropdown.css";

export default function Dropdown({ login, setDropdown }) {
  const { setModalOpen } = useContext(LoginContext);
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      return [
        <>
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
    <div className="dropdown" onClick={() => setDropdown((a) => !a)}>
      {loginStatus()}
    </div>
  );
}
