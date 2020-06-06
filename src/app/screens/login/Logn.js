import React, { Component } from "react";
import GoogleLogin from "react-google-login";
export default class Login extends Component {
  responseGoogle = (response) => {
    console.log(response);
  };

  render() {
    return (
      <div class="areMain">
        <div class="wrap">
          <div className="loginButton">
            
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            
            <p onClick={()=>{this.props.history.push('/dashboard')}} style={{'text-align': 'center',cursor:'pointer'}}>Skip to dashboard</p>
          </div>
        </div>
      </div>
    );
  }
}
