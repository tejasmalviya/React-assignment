import React , {Component} from 'react';
import "./navstyle.css";
import GoogleLogin from "react-google-login";
import {Route , Router , Switch} from "react-router";
import UserProfile from "./UserProfile";

export class SignUp extends Component{
    responseGoogle=(response)=> {
        let UserData = response.profileObj;
        console.log(response.profileObj);
        console.log(UserData.name);
    }
    hashHistory;
    render () {

        return (
            <Switch>
                <Route path="/home" exact>
                    <UserProfile user={this.UserData}/>
                </Route>
            <Route path="/">
            <div className="container-fluid side-box text-center">
                <h3 className="mt-5">Sign Up to view your Profile</h3>
                <GoogleLogin
                    clientId="465479577881-ebkgmol36njjivat46k01a1icrdnmhl2.apps.googleusercontent.com"
                    buttonText="Sign In with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
            </div>
            </Route>
            </Switch>
        )
    }
}

export default SignUp;
