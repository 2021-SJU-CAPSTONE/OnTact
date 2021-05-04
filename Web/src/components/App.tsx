import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import NavBar from "./views/Navbar/NavBar";
import StudentPage from "./views/StudentPage/StudentPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfessorPage from "./views/ProfessorPage/ProfessorPage";
import AdimnLecture from "./views/ProfessorPage/AdminLecture";
import LoginPage from "./views/LoginPage/LoginPage";
import CheckAttendence from "./views/StudentPage/CheckAttendence/CheckAttendence";
import addlecture from "./views/ProfessorPage/addlecture";
import LiveLecture from "./views/LiveLecture/LiveLecture";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px" }}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/studentpage" component={StudentPage} />
          <Route exact path="/professorpage" component={ProfessorPage} />
          <Route
            exact
            path="/professorpage/adminlecture"
            component={AdimnLecture}
          />
          <Route
            exact
            path="/studentpage/checkattendence"
            component={CheckAttendence}
          />
          <Route
            exact
            path="/professorpage/addlecture"
            component={addlecture}
          />
          <Route exact path="/livelecture" component={LiveLecture} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
