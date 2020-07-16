import React from 'react';
//import './App.css';
import NavBar from "./components/NavBar";
import Course from "./components/CourseSetion"
import UserProfile from "./components/UserProfile";
import "./components/navstyle.css"
import SignUp from "./components/SignUp";
import Log from "./components/Login";

function App() {
  return (
      <div className="App backgroundcolor">
          <div className="main-sections flex-container" >
              <div className="flex-lg-grow-1" id="major">
                  <NavBar/>
                  <Course/>

              </div>
              {/*<UserProfile className="flex-sm-fill"/>*/}
              <Log/>
            </div>
      </div>
  );
}

export default App;
