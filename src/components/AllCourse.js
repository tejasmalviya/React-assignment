import React from 'react';
import "./navstyle.css";
import {Jumbotron, Tab, Tabs} from "react-bootstrap";
import AllCourseTabs from "./AllCourseTabs";


function Course() {
    return (
        <div className="container-fluid backgroundcolor">
            <Jumbotron id="course-heading" className="backgroundcolor jumbo-heading">
                <h1>All Courses</h1>

            </Jumbotron>

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

);
}

export default Course;
