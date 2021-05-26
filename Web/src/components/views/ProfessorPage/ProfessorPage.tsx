import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Lecturelist from "./Sections/Lecturelist";
import { useAuth } from "../../hoc/AuthContext";
import { getUserInfo, getCurrentUserUid } from "./../../hoc/authService";
import * as type from "../../type";
//import Lecturelist from './Sections/Lecturelist';
function ProfessorPage() {
  const [isLogIn, setIsLogIn] = React.useState(false);
  const [v, setv] = React.useState(false);
  const [uid, setUid] = React.useState<string>(getCurrentUserUid());
  const [userInfo, setUserInfo] = React.useState<type.UserInfo>();
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
        <div style={{ width: "75%", margin: "6rem auto" }}>
          <div style={{ marginBottom: "50px", textAlign: "center" }}>
            <h2 style={{ fontWeight: "bold" }}>
              {" "}
              <UserOutlined style={{ verticalAlign: "bottom", marginRight: "10px" }} />{" "}
              {userInfo && userInfo.Name} 님{" "}
            </h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <Lecturelist />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ProfessorPage;
