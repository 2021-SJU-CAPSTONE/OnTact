import React, { useState } from "react";
import { Drawer, Button } from "antd";
import "./Sections/Navbar.css";
import logo from "./Sections/onTact.png";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getUserInfo, getCurrentUserUid } from "./../../hoc/authService";

function NavBar() {
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [v, setv] = React.useState(false);
  const [uid, setUid] = React.useState(getCurrentUserUid());
  const [userInfo, setUserInfo] = React.useState();
  getUserInfo(uid).then(info => {
    setUserInfo(info);
  });
  React.useEffect(() => {
    setUid(getCurrentUserUid());
    if (uid === "not login") {
      setIsLogIn(false);
      setv(!v);
    } else {
      setIsLogIn(true);
      getUserInfo(uid).then(info => {
        setUserInfo(info);
      });
    }
  }, [isLogIn, v]);
  return (
    <div>
      {isLogIn ? (
        <nav
          className="menu"
          style={{ position: "fixed", zIndex: 5, width: "100%", height: "60px" }}
        >
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
          <div style={{ float: "right", marginTop: "20px" }}>
            <h6 style={{ marginRight: "50px", fontWeight: "bold" }}>
              <UserOutlined style={{ verticalAlign: "top", marginRight: "5px" }} />
              {userInfo && userInfo.Name} 님
            </h6>
          </div>
        </nav>
      ) : null}
    </div>
  );
}

export default NavBar;
