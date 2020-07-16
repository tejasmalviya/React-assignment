import React from 'react';
import "./navstyle.css";
import {Jumbotron, Tab, Tabs} from "react-bootstrap";
import AllCourseTabs from "./AllCourseTabs";
import eLearn from "../a3.PNG"


function Course() {
    return (
        <div className="container-fluid backgroundcolor">

            <Jumbotron id="course-heading" className="backgroundcolor jumbo-heading">
                <h1>All Courses</h1>

            </Jumbotron>
            <div className="justify-content-around" style={{display:"flex",width:"100%"}}>
                <div className="container-fluid flex-grow-1">
            <Tabs defaultActiveKey="allCourse"  className="justify-content-start backgroundcolor" style={{ width: "100%" }}>
                <Tab eventKey="allCourse" title="All Courses" tabClassName="tab-headings">
                    <AllCourseTabs/>
                </Tab>
                <Tab eventKey="current" title="Current" tabClassName="tab-headings">
                    <AllCourseTabs/>
                </Tab>
                <Tab eventKey="archived" title="Archived" tabClassName="tab-headings">
                    <p>dsfdgsfgfh</p>
                </Tab>
                <Tab eventKey="upcoming" title="Upcoming" tabClassName="tab-headings">
                    <p>dsf</p>
                </Tab>
                <Tab eventKey="watchlist" title="Watchlist" tabClassName="tab-headings">
                    <p>dsf</p>
                </Tab>

            </Tabs>
                </div>
                {/*<div className="container-fluid float-right" >*/}
                <img className="float-right flex-sm-fill"
                    src={eLearn}
                    width="270"
                    height="300"
                    alt="React logo"
                />
                {/*</div>*/}
        </div>
        </div>

);
}

export default Course;
