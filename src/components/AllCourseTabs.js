import React from 'react';
import Tab from "./Tab";
import "./css/Style.css";

function AllCourseTabs() {

    // Course Inforation will be received from backend(API calls)
    // Here to display I am using dummy data declared below here

    const allCourses=[
        {
            title:"E-learning and Digital Cultures",
            desc:"Feb 4,2020 - Feb 22,2020",
            rating: 8.7
        },
        {
            title: "Machine Learning: Regression",
            desc: "Feb 8,2020 - Feb 18,2020",
            rating: 8.6
        },
        {
            title:"Principles of Computing(Part 1)",
            desc:"Feb 14,2020 - Feb 24,2020",
            rating: 6.7
        },
        {
            title: "Web Development: Introduction",
            desc: "Mar 5,2020 - Mar 20,2020",
            rating: "9.5"
        }
        ]
    return (
        <div className="backgroundcolor" style={{width: "100%" , marginTop: "-2px"}}>
            {allCourses.map((course , index) => <Tab courses={course}/>)}
        </div>
    );
}

export default AllCourseTabs;
