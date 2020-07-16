import React from 'react';
import NavBar from "./components/NavBar";
import CourseSection from "./components/CourseSection"
import UserSection from "./components/UserSection";
import "./components/css/Style.css"

function App () {
    return (
        <div className="App flex-container backgroundcolor">
            <div className="flex-lg-grow-1 " id="major">
                <NavBar/>
                <CourseSection/>
            </div>
            {/*<UserProfile className="flex-sm-fill"/>*/ }
            <UserSection/>
        </div>
    );
}

export default App;
