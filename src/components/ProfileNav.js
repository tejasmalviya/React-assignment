import React from 'react';
import "./navstyle.css"


function ProfileNav() {
    return (

            <div className="container-fluid">
                <i className="fa fa-calendar p-3"/>
                <i className="fa fa-shopping-bag p-3"/>
                <i className="fa fa-comments p-3"/>
                <i className={"fa fa-sign-out float-right pt-3"} aria-hidden="true" onClick={() => window.location.reload(false)}/>
          </div>
    );
}

export default ProfileNav;
