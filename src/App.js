import React from 'react';
//import './App.css';
import NavBar from "./components/NavBar";
import Course from "./components/AllCourse"
import UserProfile from "./components/UserProfile";
import "./components/navstyle.css"
import SignUp from "./components/SignUp";

function App() {
  return (
      <div className="App backgroundcolor">
          <div className="main-sections" style={{display : "flex"}}>
              <div className="flex-lg-grow-1">
                  <NavBar/>
                  <Course/>
              </div>
              {/*<UserProfile className="flex-sm-fill"/>*/}
              <SignUp/>
            </div>
      </div>
  );
}

export default App;
