

// User
//  &
// Login/ sign off

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  login,
} from '../../Reducers';

import '../../styles/login.scss';
import $ from 'jquery';

export default function Login() {
    const dispatch = useDispatch();

    const [failedLogin, setFailedLogin] = useState(false);


    function checkLogin() {
        let username = $( "input#username" ).val();
        let password = $( "input#password" ).val();

        (username === 'lordcalder' && password === '123'
            ? dispatch(login(username))
            : setFailedLogin(true)
        );
        
    }




    return (
        <>
            <div class='login'>
                {/* <h1>Ace Marketplace</h1> */}
                <input id='username' type='email' placeholder='Username'/>
                <input id='password' type='password' placeholder='Password'/>
                {/* <button >Login</button> */}
                <input type='submit' onClick={() => checkLogin()} value="Login"></input>

                {failedLogin ? 
                    <div class='failedLogin'>Wrong username or password</div> 
                : <></>}
            </div>
        </>
    )

}