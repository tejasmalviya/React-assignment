import React , {Component} from 'react';
import "./css/Style.css";
import GoogleLogin from "react-google-login";
import UserProfile from "./UserProfile";


export class Log extends Component{
    state={
        isLoggedIn: false,
        userData: null,
    }
    responseGoogle=(response)=> {

        // console.log(response.profileObj);
        this.setState({
            isLoggedIn:true,
            userData:response.profileObj,
            }
        )
    }
    onFailure=()=>{
        alert("Oops,Error! Please try again")
    }

    render () {
        if(this.state.isLoggedIn){
            return (
                <UserProfile user={this.state.userData}/>
            )
        }
        else {

            return (

                <div className="container-fluid side-box  text-center">
                    <h4 className="mt-5" >Please Sign In to view your Profile</h4>
                    <GoogleLogin
                        className="backgroundcolor mt-3"
                        clientId="465479577881-ebkgmol36njjivat46k01a1icrdnmhl2.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

            )
        }
    }
}

export default Log;
