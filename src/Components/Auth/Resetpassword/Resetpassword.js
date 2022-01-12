import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import history from '../../../history';
import VerifyEmail from '../VerifyEmail/VerifyEmail';
import authService from '../Service/authService';
import warnService from '../Service/warnService';
import './Resetpassword.css';

const Resetpassword = (props) => {
    const [password, setPassword] = useState("");
    const [password_conf, setPassword_conf] = useState("");
    const [validationChecker, setValidationChecker] = useState(0);
    const {email, token} = useParams();

    useEffect(() => {
        authService.getToken(email, token)
            .then(res => {
                if(res.data.msg === "success")
                {
                    setValidationChecker(0);
                    warnService.successWarn("Suuceded to reset password");
                } else {
                    setValidationChecker(1);
                    warnService.failWarn(res.data.msg)
                }
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handleSave(e) {
        authService.resetpassword(email, password, password_conf, token)
            .then(res => {
                if(res.data.msg === undefined)
                    warnService.failWarn(res.data);
                else {
                    warnService.successWarn("Successful reset password!");
                    history.push("/");
                }
                console.log(res.data.msg)
            })
            .catch(err => {
                console.log(err)
            });
    }

    return(
        <div className="board"> 
            {
                validationChecker === 0 ?
                <div className="justify-content-center form-inline">
                    <div method="post" className="formBoard_forgot shadow  p-3 ">
                        <h5 className="toplabel">Forgot Password</h5>

                        <div className="form-group mb-4 mt-4">
                            <i className="fa fa-lock icon_auth"></i>
                            <input style={{
                                borderRadius: '10px'
                            }} onChange={e => setPassword(e.target.value)} value={password}  className="form-control input_email " placeholder="Password" required/>
                        </div>

                        <div className="form-group mb-4 mt-4">
                            <i className="fa fa-lock icon_auth"></i>
                            <input style={{
                                borderRadius: '10px'
                            }} onChange={e => setPassword_conf(e.target.value)} value={password_conf}  className="form-control input_email " placeholder="Password confirmation" required/>
                        </div>

                        <div className="form-group form-check">
                            <button onClick={handleSave} className="btn btn_login">Submit</button>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <span className="label_footer form-inline justify-content-center">
                                <Link className="ml-3" to="/">Login</Link>
                            </span>
                        </div>
                    </div>
                </div>
                : 
                <VerifyEmail email={email}/>
            }
        </div>
    )
}
export default Resetpassword;