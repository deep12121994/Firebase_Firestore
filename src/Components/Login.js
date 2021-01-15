import React, { useState } from 'react'
import { auth, ui } from '../Config/Config'
import { Link } from 'react-router-dom'
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export const Login = (props) => {

    const uiConfig = {
        signInFlow : "popup",
        signInOptions : [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks : {
          signInSuccessWithAuthResult : () => { props.history.push("/") }
        }
      }

    //ui.start('#firebaseui-auth-container', uiConfig);

    /*return (
        <div className='container'>
            <br />
            <h2>Login</h2>
            <br />
            <div id="firebaseui-auth-container"></div>
        </div>
    )*/

    return (
        <div>
          <h1>Login</h1>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      );
}
