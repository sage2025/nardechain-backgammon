import { useState } from 'react';
import { Link } from 'react-router-dom';
// import history from '../../../history';
import authService from '../Service/authService';
import warnService from '../Service/warnService';
import './Forgotpassword.css';

const Forgotpassword = (props) => {
    const [email, setEmail] = useState("");

    function handleSave(e) {
        authService.forgotpassword(email)
            .then(res => {
                if(res.data.msg === "success")
                {
                    warnService.successWarn("We have sent you link to your email. Please check it.");
                } else {
                    warnService.failWarn(res.data.msg);
                }
                
                console.log(res.data);
            })
            .catch(err => {
                warnService.failWarn("Failed");
            });
        // history.push("/resetpassword");
    }

    return(
        <div className="board"> 
            <div className="justify-content-center form-inline">
                <div method="post" className="formBoard_forgot shadow  p-3 ">
                    <h5 className="toplabel">Forgot Password</h5>

                    <div className="form-group mb-4 mt-4">
                        <i className="fa fa-envelope icon_auth"></i>
                        <input style={{
                            borderRadius: '10px'
                        }} onChange={e => setEmail(e.target.value)} value={email}  className="form-control input_email " type="email" placeholder="Email" required/>
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
        </div>
    )
}
export default Forgotpassword;