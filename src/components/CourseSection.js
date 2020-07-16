import React from 'react';
import "./css/Style.css";
import {Jumbotron, Tab, Tabs} from "react-bootstrap";
import AllCourseTabs from "./AllCourseTabs";
import eLearnImg from "./img/eLearnImg.PNG";
import courseImg from "./img/courseImg.PNG";


function Course() {
    return (
        <div className="flex-container container-fluid backgroundcolor" >
            <div className="container-fluid" id="major">

                <Jumbotron id="course-heading" className="backgroundcolor">
                    <h1>My Courses</h1>
                </Jumbotron>

                {/*Since data is not available and to keep it simple same Courses are shown in all sections*/}

                <Tabs defaultActiveKey="allCourse"  className="backgroundcolor" style={{ width: "100%" }}>
                    <Tab eventKey="allCourse" title="All Courses" tabClassName="tab-headings">
                        <AllCourseTabs/>
                    </Tab>
                    <Tab eventKey="current" title="Current" tabClassName="tab-headings">
                        <AllCourseTabs/>
                    </Tab>
                    <Tab eventKey="archived" title="Archived" tabClassName="tab-headings">
                        <AllCourseTabs/>
                    </Tab>
                    <Tab eventKey="upcoming" title="Upcoming" tabClassName="tab-headings">
                        <AllCourseTabs/>
                    </Tab>
                    <Tab eventKey="watchlist" title="Watchlist" tabClassName="tab-headings">
                        <AllCourseTabs/>
                    </Tab>
                </Tabs>

            </div>

            <div className="container-fluid" id="minor" >
                <img className="float-right mid-img"
                     src={eLearnImg}
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
