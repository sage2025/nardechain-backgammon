import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../../../Action/register'
import ReactFlagsSelect from 'react-flags-select';
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap'
import authService from '../../../Auth/Service/authService';
import { flags, customLabels } from './state'
import './Setting.css'
import { useEffect, useState } from 'react';
import warnService from '../../../Auth/Service/warnService';

const Setting = (props) => {
    const [membership, setMembership] = useState(props?.item_register?.membership);
    const [username, setUsername] = useState(props?.item_register?.username);
    const [name, setName] = useState(props?.item_register?.name);
    const [birth, setBirth] = useState(props?.item_register?.birth);
    const [email, setEmail] = useState(props?.item_register?.email);
    const [gender, setGender] = useState("male");
    const [state, setState] = useState(props?.item_register?.state);
    const [code, setCode] = useState(props?.item_register?.code);
    const [pass, setPass] = useState("");
    const [repass, setRepass] = useState("");

    console.log(props, gender);
    function register() {
        authService.register(props.item.account, membership, username, name, birth, email, gender, state, code, pass, repass)
            .then(res => {
                const data = {
                    account: props.item.account,
                    membership: membership,
                    username: username,
                    name: name,
                    birth: birth,
                    email: email,
                    gender: gender,
                    state: state,
                    code: code,
                }
                props.registerShare(data);
                warnService.successWarn("Account has been stored successfully")
            })
    }

    return(
        <div className="account_main">
            <div className="form-inline justify-content-center input_group_account">
                <div className="input_setting col-lg">
                    <div>
                        <span className="label_account">Membership</span>
                        <Link className="label_link_account">SubScribe</Link>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-user icon"></i>
                        <input className="form-control input_account " type="text" placeholder="Free Memebership" onChange={e => setMembership(e.target.value)} value={membership} />
                    </div>
                </div>
                <div className="input_setting col-lg">
                    <div>
                        <span className="label_account">Username</span>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-edit icon"></i>
                        <input className="form-control input_account " type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username} />
                    </div>
                </div>
                <div className="input_setting col-lg">
                    <div>
                        <span className="label_account">Name</span>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-pencil icon"></i>
                        <input className="form-control input_account " type="text" placeholder="name" onChange={e => setName(e.target.value)} value={name} />
                    </div>
                </div>
                <div className="input_setting col-lg w-100">
                    <span className="label_account">Birthday</span>
                    <Form.Group controlId="dob">
                        <Form.Control type="date" className="input_account input w-75" name="dob" placeholder="Date of Birth" onChange={e => setBirth(e.target.value)} value={birth} />
                    </Form.Group>
                </div>
            </div>
            <div className="form-inline justify-content-center input_group_account">
                <div className="input_setting col-lg-3">
                    <div>
                        <span className="label_account">Email</span>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-envelope icon"></i>
                        <input className="form-control input_account " type="text" placeholder="email" onChange={e => setEmail(e.target.value)} value={email} />
                    </div>
                </div>
                <div className="input_setting col-lg-3 ">
                    <div>
                        <span className="label_account">Gender</span>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-heart icon"></i>
                        {/* <input className="form-control input_account " type="text" /> */}
                        <select defaultValue="male" className="input_account form-control select2 select2-hidden-accessible w-100"  tabIndex="-1" aria-hidden="true"  onChange={e => setGender(e.target.value)} selected={gender}>
                            <option>female</option>
                            <option>male</option>
                        </select> 

                    </div>
                </div>
                <div className="input_setting col-lg-3">
                    <div>
                        <span className="label_account">Country</span>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-map-marker-alt icon"></i>
                        <div className="input_account form-control select2 select2-hidden-accessible w-100">
                            <ReactFlagsSelect
                                selected={state}
                                onSelect={code => setState(code)}
                                countries={flags}
                                customLabels={customLabels}                              
                                placeholder="Country" 
                                style={{border: '0px'}}
                                className='mt-2'
                            />

                        </div>

                    </div>
                </div>
            </div>
            <div className="form-inline justify-content-center input_group_account">
                <div className="input_setting col-lg-3">
                    <div>
                        <span className="label_account">Reset Code</span>
                    </div>
                    <div className="input-icons">
                        <i class="icon far fa-shield-check"></i>
                        <input className="form-control input_account " type="text" placeholder="Emter Code" onChange={e => setCode(e.target.value)} value={code} />
                    </div>
                </div>
                <div className="input_setting col-lg-3">
                    <div>
                        <span className="label_account">Change Password</span>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-lock icon"></i>
                        <input className="form-control input_account " type="text" placeholder="Password" onChange={e => setPass(e.target.value)} value={pass} />
                    </div>
                </div>
                <div className="input_setting col-lg-3">
                    <div>
                        <span className="label_account">Repeat Password</span>
                    </div>
                    <div className="input-icons">
                        <i className="fa fa-lock icon"></i>
                        <input className="form-control input_account " type="text" placeholder="Password" onChange={e => setRepass(e.target.value)} value={repass} />
                    </div>
                </div>
            </div>
            <div className="form-inline justify-content-center input_group_account">
                <button className="btn btn_savechange_account" onClick={register}>Save Changes</button>
            </div>

        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        item_register: props.cred_register,
        item: props.credential
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ registerShare: register }, dispatch);
}

export default connect(mapStateToProps, mapDistachToProps)(Setting)
