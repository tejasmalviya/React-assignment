import React , {Component} from 'react';
import "./navstyle.css";
import GoogleLogin from "react-google-login";
import UserProfile from "./UserProfile";


export class Log extends Component{
    state={
        isLoggedIn: false,
        userData: null,
    }
    responseGoogle=(response)=> {
        // const UserData = response.profileObj;

        console.log(response.profileObj);
        this.setState({
            isLoggedIn:true,
            userData:response.profileObj,
            }
        )
    }

    render () {
        if(this.state.isLoggedIn){
            return (
                <UserProfile user={this.state.userData}/>
            )
        }
        else {

            return (

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

            )
        }
    }
}

export default Log;
