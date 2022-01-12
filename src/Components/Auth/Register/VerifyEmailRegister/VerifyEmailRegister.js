import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../../../../history';
import authService from '../../Service/authService';
import warnService from '../../Service/warnService';
import { connect } from 'react-redux';
import './VerifyEmailRegister.css';

const VerifyEmailRegister = (props) => {
    const [digit1, setDigit1] = useState("");
    const [digit2, setDigit2] = useState("");
    const [digit3, setDigit3] = useState("");
    const [digit4, setDigit4] = useState("");
    const [digit5, setDigit5] = useState("");
    const [digit6, setDigit6] = useState("");

    console.log(props.item_register)
    function verify() {
        var validateCode = digit1+digit2+digit3+digit4+digit5+digit6;
        const data = {
            name: props.item_register.name,
            email: props.item_register.email,
            password: props.item_register.password,
            passwordconf: props.item_register.passwordconf,
            validateCode: parseInt(validateCode) 
        }
        authService.validateRegister(data)
            .then(res => {
                if(res.data.msg === "Successful register")
                {
                    warnService.successWarn(res.data.msg);
                    history.push("/");
                } else {
                    warnService.failWarn(res.data.msg);
                }
                console.log(res)
            })
            .catch(err=>{});
    }

    function verifyAgain() {
        authService.register(props.item_register.name, props.item_register.email, props.item_register.password, props.item_register.passwordconf)
            .then(res=>{
                warnService.successWarn("We have resent validate code to your email. Please check it");
            })
            .catch((err, res) => {
                console.log(err, res)
                warnService.failWarn("registeration failed");
            })

    }
    return(
        <div className="verifyboard_register"> 
            <div className="justify-content-center form-inline">
                <div method="post" className="formBoard_verify_register shadow  p-3 ">
                    <h1 className="toplabel text-center">Validation Code</h1>

                    <h5 className="mt-5 mb-5 form-inline">
                        <input onChange={e=>setDigit1(e.target.value)} value={digit1} className="form-control col-lg-2" />
                        <input onChange={e=>setDigit2(e.target.value)} value={digit2} className="form-control col-lg-2" />
                        <input onChange={e=>setDigit3(e.target.value)} value={digit3} className="form-control col-lg-2" />
                        <input onChange={e=>setDigit4(e.target.value)} value={digit4} className="form-control col-lg-2" />
                        <input onChange={e=>setDigit5(e.target.value)} value={digit5} className="form-control col-lg-2" />
                        <input onChange={e=>setDigit6(e.target.value)} value={digit6} className="form-control col-lg-2" />
                    </h5>

                    <button onClick={verify} className="btn btn_verify_register shadow">
                        Submit
                    </button>
                    <div className="mt-3">
                        <button onClick={verifyAgain} className="btn mr-3 btn_verify_again">Didn't get validate code?</button>
                        <Link to="/register" className="footer_verifyEmail">signup</Link>
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


export default connect(mapStateToProps)(VerifyEmailRegister)