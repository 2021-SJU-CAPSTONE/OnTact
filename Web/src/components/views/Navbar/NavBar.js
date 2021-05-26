import React, { useState } from "react";
import { Drawer, Button } from "antd";
import "./Sections/Navbar.css";
import logo from "./Sections/onTact.png";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getUserInfo, getCurrentUserUid } from "./../../hoc/authService";

function NavBar() {
  return (
    <nav className="menu" style={{ position: "fixed", zIndex: 5, width: "100%", height: "60px" }}>
      <div className="menu__logo">
        <Link to="/">
          <img
            src={logo}
            style={{
              marginTop: "-10px",
              marginLeft: "50px",
              width: "100px",
              height: "30px",
            }}
          />
        </Link>
      </div>
      <div style={{ float: "right", marginTop: "20px" }}>
        <h6>logout</h6>
      </div>
      {/*<div style={{ float: "right", marginTop: "20px" }}>
        {isLogIn ? (
          <h6 style={{ marginRight: "50px", fontWeight: "bold" }}>
            <UserOutlined style={{ verticalAlign: "top", marginRight: "5px" }} />
            {userInfo && userInfo.Name} 님
          </h6>
        ) : null}
        </div>*/}
    </nav>
  );
}

export default NavBar;
