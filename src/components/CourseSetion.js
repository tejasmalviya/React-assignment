import React from 'react';
import "./navstyle.css";
import {Jumbotron, Tab, Tabs} from "react-bootstrap";
import AllCourseTabs from "./AllCourseTabs";
import eLearn from "../a3.PNG";
import courseImg from "../a4.PNG";


function Course() {
    return (
        <div className="flex-container container-fluid backgroundcolor" >
            <div className="container-fluid" id="major">

                <Jumbotron id="course-heading" className="backgroundcolor jumbo-heading">
                    <h1>All Courses</h1>
                </Jumbotron>

                <Tabs defaultActiveKey="allCourse"  className="backgroundcolor" style={{ width: "100%" }}>
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

            <div className="container-fluid" id="minor" >
                <img className="float-right mid-img"
                     src={eLearn}
                     width="230"
                     height="230"
                     alt="Learning logo"

                />
                <img className="float-right mid-img"
                     src={courseImg}
                     width="230"
                     height="230"
                     alt="React logo"
                />
            </div>

        </div>

    );
}

export default Course;
