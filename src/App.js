import React from 'react';
import NavBar from "./components/NavBar";
import CourseSection from "./components/CourseSection"
import UserSection from "./components/UserSection";
import "./components/css/Style.css"
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App () {
    return (
        <div className="App flex-container backgroundcolor">
            <div className="flex-lg-grow-1 " id="major">
                <NavBar/>
                <Router>
                    <Route path="/" exact component={CourseSection}/>
                    <Route path="/usersection" component={UserSection}/>
                </Router>
            </div>
        </div>
    );
}

export default App;
