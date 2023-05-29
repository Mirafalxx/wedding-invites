import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="nav-items">
        <Link className="nav-link" to="/">
          Accept invite
        </Link>
        <Link className="nav-link" to="/invite-users">
          Invite Users
        </Link>
        <Link className="nav-link" to="/user-list">
          User List
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
