import React from 'react';
import "./css/Style.css"
import ProfileNav from "./ProfileNav";

function UserProfile(props) {
    return (
        <div className="container-fluid side-box">
            <ProfileNav/>
            <div id="user-box">
            <img
                src={props.user.imageUrl}
                width="150"
                height="150"
                className="profile-img"
                alt="React logo"
            />
            <h3>
                {props.user.name}
            </h3>
                <h6 className="text-black-50">
                    {props.user.email}
                </h6>
            </div>
            <div className="grid2x2">
                <div className="box backgroundcolor container-fluid">
                        <p className="text-black-50 pt-3">
                            Completed Course
                        </p>
                        <p className="text-xl-center boxNum" >
                            16
                        </p>
                </div>
                <div className="box backgroundcolor container-fluid">
                    <p className="text-black-50 pt-3">
                        Certificate Earned
                    </p>
                    <p className="text-xl-center boxNum">
                        14
                    </p>
                </div>
                <div className="box backgroundcolor container-fluid">
                    <p className="text-black-50 pt-3">
                        Course in Progress
                    </p>
                    <p className="text-xl-center boxNum">
                        8
                    </p>
                </div>
                <div className="box backgroundcolor container-fluid">
                    <p className="text-black-50 pt-3">
                        Forum Discursions
                    </p>
                    <p className="text-xl-center boxNum">
                        26
                    </p>
                </div>


            </div>

        </div>
    );
}

export default UserProfile;
