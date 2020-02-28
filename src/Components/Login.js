import React, { Component } from "react";
import GoogleButton from "react-google-button";
import {client_id} from "../Constants/Consts";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    this.googleSDK();
  }

  prepareLoginButton = () => {
    this.auth2.attachClickHandler(
      this.refs.googleLoginBtn,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        //YOUR CODE HERE
        this.setState({ user: profile });
        this.setState({ isLoggedIn: true });
      },
      error => {
        console.log(JSON.stringify(error, undefined, 2));
      }
    );
  };

  googleSDK = () => {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.init({
          client_id: client_id,
          cookiepolicy: "single_host_origin",
          scope: "profile email"
        });
        this.prepareLoginButton();
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn === false ? (
          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="text-left">Login</h2>
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row mt-5 mb-5">
                    <div className="col-md-4 mt-2 m-auto ">
                      {/* <GoogleButton
                      className="loginBtn loginBtn--google"
                      ref="googleLoginBtn"
                        onClick={() => {
                          console.log("Google button clicked");
                        }} */}
                      <button
                        className="loginBtn loginBtn--google"
                        ref="googleLoginBtn"
                      >
                        Login with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {this.props.logged(true)}
            {this.props.user(this.state.user)}
            {this.setState({ isLoggedIn: false })}
          </div>
        )}
      </div>
    );
  }
}

export default Login;
