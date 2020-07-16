import React from 'react';
import tabIcon from "./img/tabIcon.jpg"

function Tab(props) {
    return (

        <div className="container-fluid course-tab" >
            <img id="tabImgSection"
                src={tabIcon}
                 width="40"
                height="90"
                className="d-inline-block align-top"
                alt="React logo"
            />
            <div className="container-fluid" id="tabMidSection">
                <h4>
                    {props.courses.title}

                </h4>
                <h6 className="text-black-50">
                    {props.courses.desc}
                </h6>
            </div>
            <div className="container-fluid flex-container" id="tabEndSection">
                <h4 style={{marginTop:0,padding:10}}>
                    {props.courses.rating}
                </h4>
                <button className="btn btn-primary tab-button">View Course</button>
            </div>

        </div>
    );
}

export default Tab;
