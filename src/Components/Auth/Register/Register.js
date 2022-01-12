import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../../Action/register';
import authService from '../Service/authService';
import warnService from '../Service/warnService'
import history from '../../../history';
import './Register.css';

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passowrd_confirmation, setPasswordConfirm] = useState("");

    function register() {
        authService.register(username, email, password, passowrd_confirmation)
            .then(res=>{
                const data = {
                    name: username,
                    email: email,
                    password: password,
                    passwordconf: passowrd_confirmation
                }
                props.registerShare(data)
        
                history.push("/verifyEmailRegister");
                warnService.successWarn("We have sent validate code to your email. Please check it");
            })
            .catch((err, res) => {
                console.log(err, res)
                warnService.failWarn("registeration failed");
            })
            console.log(props.item_register)
    }
    return(
        <div className="board_register"> 
            <div className="justify-content-center form-inline overflow-auto">
                <div method="post" className="registerBoard shadow  overflow-auto p-3 ">
                    <h5 className="text-left toplabel_register">Create a new account</h5>
                    <div className="form-inline">
                        <div className="form-group mb-4 col-lg-6 input_group" >
                            <i className="fa fa-user icon_auth"></i>
                            <input style={{
                                borderRadius: '5px',
                                width:"",
                            }}  onChange={e => setUsername(e.target.value)} value={username} className="form-control input_email " placeholder="username" required/>
                        </div>


                        <div className="form-group mb-4 col-lg-6 input_group">
                            <i className="fa fa-envelope icon_auth"></i>
                            <input style={{
                                borderRadius: '5px'
                            }} onChange={e => setEmail(e.target.value)} value={email}  className="form-control input_email " type="email" placeholder="Email" required/>
                        </div>

                    </div>
                    <div className="form-inline">
                        <div className="form-group mb-4 col-lg-6 input_group">
                            <i className="fa fa-lock icon_auth"></i>
                            <input style={{
                                borderRadius: '5px'
                            }} onChange={e => setPassword(e.target.value)} value={password}  className="form-control input_email " type="password" placeholder="password" required/>
                        </div>


                        <div className="form-group mb-4 col-lg-6 input_group">
                            <i className="fa fa-lock icon_auth"></i>
                            <input style={{
                                borderRadius: '5px'
                            }} onChange={e => setPasswordConfirm(e.target.value)} value={passowrd_confirmation}  className="form-control input_email " placeholder="confirm password" type="password" required/>
                        </div>

                    </div>
                    <div className="form-inline">
                        <div className="col-lg-6">
                            
                        </div>
                        <div className="col-lg-6 acccept text-left">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox"  className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1" ><span className="label_accept">I would like to receive offers, news and information via e-mail</span></label>
                            </div>
                            
                        </div>
                    </div>

                    <div className="form-inline">
                        <div className="col-lg-6">
                            
                        </div>
                        <div className="col-lg-6 acccept text-left">
                            <div className="custom-control custom-checkbox" >
                                <input type="checkbox"  className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label  float-left" htmlFor="customCheck2" ><span className="label_accept">I accept <Link to="/register">terms of service</Link></span></label>
                            </div>
                        </div>
                    </div>


                    <div className="form-group form-check">
                        <button onClick={register} className="btn btn_register">Create new account</button>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <span className="label_footer">
                            Already have an account?<Link className="ml-3" to="/">Sign in</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        item_register: props.cred_register
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ registerShare: register }, dispatch);
}

export default connect(mapStateToProps, mapDistachToProps)(Register)