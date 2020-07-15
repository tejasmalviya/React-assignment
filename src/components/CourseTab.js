import React from 'react';
import logo from "../logo.svg";

function CourseTab(props) {
    return (

        <div className="container-fluid course-tab">
            <img style={{padding:10}}
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React logo"
            />
            <div className="container-fluid align-content-end" style={{padding:10}}>
                <h3>
                    {props.courses.title}

                </h3>
                <h6>
                    {props.courses.desc}
                </h6>
            </div>
            <div className="container-fluid button-div" >
                <h4 style={{marginTop:0,padding:10}}>
                    {props.courses.rating}
                </h4>
                <button className="btn btn-primary tab-button">View Course</button>
            </div>



        </div>
    );
}

export default CourseTab;
