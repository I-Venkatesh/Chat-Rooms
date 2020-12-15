import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import icon from "./icon.png"
import {auth,provider} from "./firebase";
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider";
function Login() { 
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src={icon} />
                <div className="login__text">
                    <h1>Sign in to Chat Rooms</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
