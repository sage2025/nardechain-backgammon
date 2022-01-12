import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../Service/authService';
import warnService from '../Service/warnService';
import './VerifyEmail.css';

const VerifyEmail = ({ email }) => {
    function verify() {
        authService.forgotpassword(email)
            .then(res => {
                warnService.successWarn("We have sent you verify link again");
            })
            .catch(err=>{});
    }
    return(
        <div className="verifyboard"> 
            <div className="justify-content-center form-inline">
                <div method="post" className="formBoard_verify shadow  p-3 ">
                    <h1 className="toplabel text-center">Verify your Email</h1>

                    <h5 className="mt-5 mb-5">
                        We have sent link to your email address. Please check and redirect there.
                    </h5>

                    <button onClick={verify} className="btn btn_verify shadow">
                        Didn't get a link?
                    </button>
                    <div className="mt-3 verifyemail_footer">
                        <Link to="/">sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerifyEmail;