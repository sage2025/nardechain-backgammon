import { useState } from "react";
import warnService from "../../../Auth/Service/warnService";
import {Modal} from "react-bootstrap";
import './Avatar.css';

const Avatar = () => {
    const [avatarState, setAvatar] = useState(false);
    const [ava_sel_State, set_Ava_SelState] = useState(0);

    function avatar_update_fn() {
        setAvatar(false);
        warnService.successWarn("Successfully updated your avatar")
    };
    return(
        <div className="avatar_board form-inline">
            <div className="col-lg-5 form-inline justify-content-center">
                <div className="avatar_left">
                    <img alt="" src={"Assets/avatars/Ava0"+ava_sel_State+".png"} className= "avatar_img"  />
                </div>
                <div onClick={() => setAvatar(true)} className="avatar_edit_icon form-inline justify-content-center">
                    <i className="fas fa-pencil edit_icon"></i>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="form-inline ">
                    <div className="text-left">
                        <span className="avatar_username">drcyberID</span>
                        <h6 className="avatar_id">ID: 268615</h6>
                    </div>
                    <div className="form-inline avatar_online">
                        <div className="marker_online"></div>
                        <span className="avatar_label_online">online</span>
                    </div>
                </div>
                <div className="row">
                    <div className="avatar_infos">
                        5 Level
                    </div>
                    <div className="avatar_infos">
                        55,000
                    </div>
                    <div className="avatar_infos">
                        0.000
                    </div>                                        
                </div>
                <div className="row">
                    <div className="avatar_rank_info ">
                        <div className="shadow">
                            <img alt="" src="Assets/avatar_setting/member.png" className="avatar_setting_img" />
                        </div>
                        <span className="avatar_border_label">MEMBER SINCE</span>
                    </div>
                    <div className="avatar_rank_info ">
                        <div className="shadow">
                            <img alt="" src="Assets/avatar_setting/win.png" className="avatar_setting_img" />
                        </div>
                        <span className="avatar_border_label">WIN STREAK</span>
                    </div>
                    <div className="avatar_rank_info ">
                        <div className="shadow">
                            <img alt="" src="Assets/avatar_setting/crowd.png" className="avatar_setting_img" />
                        </div>
                        <span className="avatar_border_label">TOURNAMENT WON</span>
                    </div>                                        
                </div>
            </div>

            <Modal
                size="lg"
                show={avatarState}
                onHide={() => setAvatar(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className=""
            >
                <Modal.Header className="createGMmodal">
                    <button type="" className="closeModal btn" onClick={() => setAvatar(false)}>
                        <i className="fa fa-times cross"></i>
                    </button>
                </Modal.Header>
                <Modal.Body  className="createGMmodal modal-body justify-content-center">
                        <div className="justify-content-center">
                            <div className="form-inline justify-content-center">
                                <div className="avatar_edit_top form-inline justify-content-center">
                                    <img alt="" src="Assets/avatar.png" style={{width:"40px", height:"40px"}} />
                                </div>
                                <div>
                                    <span style={{color:"#6C50FA", fontSize:"18px", fontWeight:"600"}}>drcyberID</span>
                                    <h6 style={{color:"#666666"}}>choose your photo</h6>
                                </div>
                            </div>
                            <div className="form-inline justify-content-center avatar_edit_board">
                                <div className="avatar_edit_board_left shadow form-inline justify-content-center">
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava01.png" onClick={e => set_Ava_SelState(1)} className={ava_sel_State === 1 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt="" />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava02.png" onClick={e => set_Ava_SelState(2)} className={ava_sel_State === 2 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt="" />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava03.png" onClick={e => set_Ava_SelState(3)} className={ava_sel_State === 3 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt=""  />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava04.png" onClick={e => set_Ava_SelState(4)} className={ava_sel_State === 4 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt=""  />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava05.png" onClick={e => set_Ava_SelState(5)} className={ava_sel_State === 5 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt=""  />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava06.png" onClick={e => set_Ava_SelState(6)} className={ava_sel_State === 6 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt=""  />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava07.png" onClick={e => set_Ava_SelState(7)} className={ava_sel_State === 7 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt=""  />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava08.png" onClick={e => set_Ava_SelState(8)} className={ava_sel_State === 8 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt=""  />
                                    </div>
                                    <div className="avatar_edit_board_img_board">
                                        <img src="Assets/avatars/Ava09.png" onClick={e => set_Ava_SelState(9)} className={ava_sel_State === 9 ? "avasel avatar_edit_board_img" : " avatar_edit_board_img"} alt=""  />
                                    </div>
                                    <div className="w-100 justify-content-center form-inline">
                                        <button className={ava_sel_State > 0 ? "btn avaselbtn" : "btn"} style={{border:"1px solid lightgrey", color:"lightgray"}}  onClick={avatar_update_fn}>Choose the proposed</button>
                                    </div>
                                </div>
                                
                                <div className="avatar_edit_board_right justify-content-center form-inline shadow text-center">
                                    <h6 style={{marginTop:"60px", color:"#4678DD", fontSize:"20px", fontWeight:"600"}}>or Upload a photo</h6>
                                    <h7 style={{color:"#4678DD", fontSize:"18px", marginTop:"-40px"}}>from your computer</h7>
                                    <div className="avatar_upload_btn">
                                        <div style={{height:"10px"}}></div>
                                        <h6 style={{fontSize:"20px", color:"white"}}>Upload</h6>
                                        <div className="avatar_input_file" >
                                            <input style={{cursor:"pointer"}} type="file" size="60" />
                                        </div>
                                    </div>
                                    <span style={{fontSize:"15px", color:"lightblue"}}>Accepted file types *.jpeg, *.png</span>
                                </div>
                            </div>
                        </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center createGMmodal">

                </Modal.Footer>
            </Modal>             
        </div>
    )
}

export default Avatar;