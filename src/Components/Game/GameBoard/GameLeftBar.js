import Gamechat from "./Gamechat/Gamechat";
import './GameBoard.css'

const GameLeftBar = (props) => {
    return (
        <div className="col-md-3 col-sm-12" id="game-state" style={{ backgroundImage: "url('Assets/game-state.png')"  }}>
            <div className="d-flex align-items-stretch justify-content-between">
                <div className="d-flex align-items-stretch" id="game-state-buttons">
                    <button className="btn btn-sm btn-circle btn-purple">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.42773 0C6.84773 0 7.18873 0.334385 7.18873 0.747218C7.18873 1.15907 6.84873 1.49345 6.42773 1.49345L4.79873 1.49444C3.44673 1.4964 2.34673 2.57604 2.34673 3.90279V5.76201C2.34673 6.17386 2.00473 6.50923 1.58473 6.50923C1.16473 6.50923 0.82373 6.17386 0.82373 5.76201V3.90279C0.82373 1.75331 2.60673 0.0029418 4.79773 0.0009806L6.42673 0H6.42773ZM13.6006 0.000293732H15.1936C17.3906 0.000293732 19.1766 1.75165 19.1766 3.90603V5.7623C19.1766 6.17415 18.8366 6.50952 18.4156 6.50952C17.9956 6.50952 17.6546 6.17415 17.6546 5.7623V3.90603C17.6546 2.57535 16.5506 1.49277 15.1936 1.49277H13.6006C13.1806 1.49277 12.8396 1.15936 12.8396 0.747511C12.8396 0.334678 13.1806 0.000293732 13.6006 0.000293732ZM15.2288 18H13.7206C13.3229 18 13 17.6404 13 17.1964C13 16.7535 13.3229 16.395 13.7206 16.395H15.2288C16.5137 16.395 17.559 15.2308 17.559 13.7998V11.8036C17.559 11.3607 17.8818 11 18.2795 11C18.6781 11 19 11.3607 19 11.8036V13.7998C19 16.1166 17.309 18 15.2288 18ZM6.28267 18C6.67859 18 7.00003 17.6404 7.00003 17.1964C7.00003 16.7535 6.67953 16.3939 6.28267 16.3939L4.74708 16.3929C3.47262 16.3908 2.43569 15.2297 2.43569 13.803V11.8036C2.43569 11.3607 2.11331 11 1.71739 11C1.32148 11 1.00003 11.3607 1.00003 11.8036V13.803C1.00003 16.1145 2.68078 17.9968 4.74614 17.9989L6.28173 18H6.28267Z" fill="#DEE0F4"/>
                        </svg>
                    </button>
                    <button className="btn btn-sm btn-circle btn-purple">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.09615 14.0886H3.9838C2.96627 14.0886 2.28015 13.3929 2.14144 12.2452C1.94344 10.8327 1.9625 8.28092 2.14144 6.8388C2.28015 5.84351 2.96627 5.05998 3.9838 5.05998H6.09615L9.80944 2.02222C10.1345 1.74586 10.6967 1.48539 11.0387 1.4928C11.7619 1.47057 12.4321 1.9968 12.6894 2.85551C12.8313 3.40292 12.8705 4.04139 12.9425 4.63222C13.0145 5.20716 13.0569 5.15527 13.0685 6.88857" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.0653 11.8974C13.0463 13.2336 13.0007 14.0468 12.9425 14.5159C12.8705 15.1067 12.8493 15.6901 12.6894 16.2915C12.4322 17.1513 11.7619 17.6765 11.0387 17.6542C10.6967 17.6627 10.2129 17.4541 9.8878 17.1788L8.49121 16.0395" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.2009 1L2.05322 18.1476" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.2014 1L2.05371 18.1476" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="btn btn-sm btn-circle btn-purple">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3L4 15" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 15L3 3" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="d-flex align-items-stretch">
                    <button className="btn btn-sm btn-circle btn-purple">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.45459 5.54544C4.45459 3.03506 6.48965 1 9.00003 1C11.5104 1 13.5455 3.03506 13.5455 5.54544C13.5455 8.05581 11.5104 10.0909 9.00003 10.0909" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 14.6364C9.41816 14.6364 9.75733 14.9755 9.75733 15.3939C9.75733 15.8123 9.41816 16.1515 8.99976 16.1515C8.58136 16.1515 8.24219 15.8123 8.24219 15.3939C8.24219 14.9755 8.58136 14.6364 8.99976 14.6364Z" fill="#DEE0F4"/>
                            <path d="M8.99976 14.6364C9.41816 14.6364 9.75733 14.9755 9.75733 15.3939C9.75733 15.8123 9.41816 16.1515 8.99976 16.1515C8.58136 16.1515 8.24219 15.8123 8.24219 15.3939C8.24219 14.9755 8.58136 14.6364 8.99976 14.6364" stroke="#DEE0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="row game-state-user">
                <div className="col-md-6 col-sm-12 text-center">
                    <div className="game-state-user-avatar">
                        <img alt="" src="Assets/avatar2.png" className="avatar-img" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 game-state-name">
                    <label className="h2 bold"><font className="text-purple">GR</font> <font className="text-white">682</font></label><br />
                    <label className="game-state-username text-white h5">{props.info.email}</label> <br />
                    <div style={{ width: "60px" }}>
                        <div className="game-stone bg-white" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center game-tool-buttons">
                    <button type="button" className="btn btn-primary btn-lg link_btn">
                        <label className="text-purple text-uppercase tool-type">Length</label><br/>
                        <label className="text-white tool-value">25</label>
                    </button>
                    <button type="button" className="btn btn-primary btn-lg link_btn">
                        <label className="text-purple text-uppercase tool-type">Stake</label><br/>
                        <label className="text-white tool-value">0</label>
                    </button>
                    <button type="button" className="btn btn-primary btn-lg link_btn">
                        <label className="text-purple text-uppercase tool-type">Zoom</label><br/>
                        <label className="text-white tool-value">
                            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_3716_35840)">
                                <path d="M4 8C4 6.89543 4.89543 6 6 6H16C18.2091 6 20 7.79086 20 10V17C20 18.1046 19.1046 19 18 19H8C5.79086 19 4 17.2091 4 15V8Z" fill="#DEE0F4"/>
                                <path d="M21 9.56619C21 9.21493 21.1843 8.88942 21.4855 8.7087L24.4855 6.9087C25.152 6.50878 26 6.9889 26 7.76619V17.2338C26 18.0111 25.152 18.4912 24.4855 18.0913L21.4855 16.2913C21.1843 16.1106 21 15.7851 21 15.4338V9.56619Z" fill="#DEE0F4"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_3716_35840" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0235294 0 0 0 0 0.188235 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3716_35840"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3716_35840" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </label>
                    </button>
                </div>
            </div>
            <div className="row game-state-user">
                <div className="col-md-6 col-sm-12 text-center">
                    <div className="game-dashed-border">
                        <div className="game-state-user-avatar">
                            <img alt="" src="Assets/avatars/Ava00.png" className="avatar-img" />
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-6 col-sm-12 game-state-name">
                    <label className="h2 bold"><font className="text-purple">GR</font> <font className="text-white">1464</font></label><br />
                    <label className="game-state-username text-white h5">drcyber1</label> <br />
                    <div style={{ width: "60px" }}>
                        <div className="game-stone bg-purple" />
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-12 col-sm-12">
                    <Gamechat location={props.location} />
                </div>
            </div>
        </div>
    )
}

export default GameLeftBar;