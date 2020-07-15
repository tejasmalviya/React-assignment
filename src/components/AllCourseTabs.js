import React from 'react';
import CourseTab from "./CourseTab";
import "./navstyle.css";

function AllCourseTabs() {
    const allcourses=[
        {
            title:"E-learning",
            desc:"this is descption",
            rating: 6.7
        },
        {
            title: "E-learning 2",
            desc: "this is 2nd despction",
            rating: "5.5"
        },
        {
            title:"E-learning",
            desc:"this is descption",
            rating: 6.7
        },
        {
            title: "E-learning 2",
            desc: "this is 2nd despction",
            rating: "5.5"
        }
        ]
    return (
        <div className="backgroundcolor" style={{width: "100%" , marginTop: "-2px"}}>
            {allcourses.map((course , index) => <CourseTab courses={course}/>)}
        </div>
    );
}

export default AllCourseTabs;
