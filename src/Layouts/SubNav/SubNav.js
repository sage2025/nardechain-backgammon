import { useState, forwardRef } from 'react';
import {List, ListItem, Collapse, Button, Drawer, Badge } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import './SubNav.css'
import { login } from "../../Action";
import clsx from 'clsx';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { NavLink as RouterLink } from 'react-router-dom';
import useStyles from './SidebarStyles';
import authService from '../../Components/Auth/Service/authService';

const SubNav = (props) => {
    const [toggleIsOpen, setToggleIsOpen] = useState(false);
    const [toggleIconColor, setToggleIconColor] = useState("#8FAEE7");
    const [ menu, setMenu ] = useState({});
    const { className, ...rest } = props;
    const [name, setName] = useState(props.item_register.username); 
    const [room, setRoom] = useState('game'); 

    const classes  = useStyles();
    const handleOpenClick = (item) => {
        let newData = {...menu, [item] : !menu[item]};
        setMenu(newData);
    }
    const CustomRouterLink = forwardRef((props, ref) => (
      <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
      </div>
    ));
    const handleMenu = ( children, level=0 ) => {
        return children.map(({children, name, url, links }) => {
            if ( !children ) {
              return (
                <List component="div" disablePadding key={ name }>
                  <ListItem
                    className={classes.item}
                    disableGutters
                    style={{padding:"0px"}}
                    key={name}
                  >
                    <Button
                      className={clsx({
                        [classes.btnRoot] : true,
                        [classes.button] : true,
                        [classes.subMenu] : level
                      })}
                      component={CustomRouterLink}
                      to={url}
                    >
                      {name}
                    </Button>
                  </ListItem>
                </List>
              )
            }
            return (
              <div key={ name }>
              <ListItem
                className={classes.item}
                disableGutters
                key={name}
                onClick={() => handleOpenClick(name)}
              >
                <Button
                className={clsx({
                  [classes.btnRoot] : true,
                  [classes.button] : true,
                  [classes.subMenu] : level
                })}>
                  { name } { menu[ name ] ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                </ListItem>
                <Collapse
                  in={ (menu[name]) ? true : false }
                  timeout="auto"
                  unmountOnExit
                >
                  { handleMenu( children, 1) }
                </Collapse>
              </div>
            )
        })
    }
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click)}
    const [createGM, setCreateGM] = useState(false);
    const [stake, setStake] = useState("");
    const [length, setLength] = useState("");
    const [clock, setClock] = useState("");
    const [navbarBackground, setNavbarBackground] = useState("#F1F5FF");
    const [navbarStyle, setNavbarStyle] = useState({
        backgroundColor: "#f1f5ff",
        boxShadow: "0px 8px 23px rgba(70, 120, 221, 0.1)"
    });
    const [navbarFontColor, setNavbarFontColor] = useState('#6C50FA');
    const [navbarButtonStyle, setNavbarButtonStyle] = useState({
        backgroundColor: "white", 
        color: "#2D249C", 
    });
    const [iconButtonClass, setIconButtonClass] = useState("btn-white");
    const [iconColor, setIconColor] = useState("#6C50FA");

    function  handleToggle() {
        setToggleIsOpen(!toggleIsOpen);
    }

    function GameStart(event) {
        if(!name || !room)
            event.preventDefault();
        const data = {
            ...props.item,
            gameState: true
        }
        setName(props.item_register.username)
        props.loginShare(data);
        setNavbarButtonStyle({
            backgroundColor: "#0C0630", 
            color: "white", 
            boxShadow: "0px 4px 10px rgba(108, 80, 250, 0.3), inset 0px 16px 10px rgba(45, 36, 156, 0.5)",
            backgroundImage: 'radial-gradient(#3F4869, #18144D, #000000)'
        });
        setNavbarStyle({
            backgroundColor: "#0C0630",
            boxShadow: "0px 14px 23px rgba(38, 22, 98, 0.5)"
        });
        setIconButtonClass("btn-gradient-purple");
        setIconColor("#ffffff");
        setNavbarBackground("#0C0630");
        setNavbarFontColor('#ffffff');
        setToggleIconColor("#ffffff");
        // history.push('/splash')
    }
    console.log(name, room, "nameroom")

    return(
        <div>
            <header className="nav-bar align-items-center d-flex justify-content-between" style={navbarStyle}>
                <div className="d-flex align-items-center">
                    <button className="btn btn-default" onClick={() => {handleToggle()}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 6C20 5.44772 19.5523 5 19 5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H19C19.5523 7 20 6.55228 20 6ZM21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12ZM16 17C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H16Z" fill={toggleIconColor}/>
                        </svg>
                    </button>
                    <Drawer
                        anchor="left"
                        classes={{ paper: classes.drawer }}
                        open={toggleIsOpen}
                        variant="persistent"
                        onClose={() => {handleToggle()}}
                        >   
                            <div className="side-drawer"
                                tabIndex={0}
                                role="button"
                                onClick={() => {handleToggle()}}
                                onKeyDown={() => {handleToggle()}}>
                                {/* <List {...rest} className={clsx(classes.root, className)} >
                                    { handleMenu(menuItems.data) }
                                </List> */}
                                <div id="sidebar">
                                    <div className="side-item" id="sidebar-close">
                                        <a onClick={() => {handleToggle()}} style={{ cursor: "pointer" }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.36922 10.869C7.42572 10.811 7.63906 10.563 7.8378 10.359C9.00292 9.076 12.0424 6.976 13.6332 6.335C13.8748 6.232 14.4856 6.014 14.812 6C15.1247 6 15.4228 6.072 15.7073 6.218C16.0619 6.422 16.3463 6.743 16.5022 7.122C16.6025 7.385 16.7584 8.172 16.7584 8.186C16.9143 9.047 17 10.446 17 11.992C17 13.465 16.9143 14.807 16.7867 15.681C16.772 15.695 16.6162 16.673 16.4457 17.008C16.133 17.62 15.5222 18 14.8685 18H14.812C14.3863 17.985 13.491 17.605 13.491 17.591C11.9859 16.949 9.01656 14.952 7.82319 13.625C7.82319 13.625 7.48709 13.284 7.34096 13.071C7.11301 12.765 7 12.386 7 12.007C7 11.584 7.12762 11.19 7.36922 10.869Z" fill="#ffffff"/>
                                            </svg>
                                            Close
                                        </a>
                                    </div>
                                    <div className="side-item d-flex" id="sidebar-avatar">
                                            <div className="col-5">
                                                <div style={{ width: "100%", borderRadius: "50%", backgroundColor: "#261662", padding: "3px" }}>
                                                    <img alt="" src="Assets/avatar.png" className="avatar-img" />
                                                </div>
                                            </div>
                                            <div className="col-7" id="sidebar-name">
                                                <label className="h5 text-purple bold">5 Level</label>
                                                <label className="text-light h4 bold">drcybe1</label>
                                                <label className="text-primary">
                                                    ID: 268615
                                                </label>
                                            </div>
                                    </div>
                                    <div className="side-item" id="sidebar-scores">
                                        <div className="d-flex align-items-center sidebar-score">
                                            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9.58336" cy="10.8333" r="6.94444" fill="url(#paint0_linear_3850_1566)"/>
                                                <g filter="url(#filter0_i_3850_1566)">
                                                <circle cx="9.58337" cy="10.8333" r="6.25" fill="url(#paint1_linear_3850_1566)"/>
                                                </g>
                                                <circle cx="9.58337" cy="10.8333" r="5.75" stroke="#2E2E4D"/>
                                                <path d="M9.61185 6.31946L6.80554 11.0299L9.61185 12.5832L12.4182 11.0299L9.61185 6.31946Z" fill="#17204D" fillOpacity="0.5"/>
                                                <path d="M9.61185 9.59653L6.80554 11.0299L9.61185 12.5833L12.4182 11.0299L9.61185 9.59653Z" fill="#17204D" fillOpacity="0.5"/>
                                                <path d="M9.61185 15.3472L6.80554 11.5158L9.61185 13.0691L12.4182 11.5158L9.61185 15.3472Z" fill="#17204D" fillOpacity="0.5"/>
                                                <path d="M12.418 11.5158L9.61169 13.0691V15.3472L12.418 11.5158ZM12.418 11.0299L9.61169 6.31946V12.5832L12.418 11.0299Z" fill="#17204D" fillOpacity="0.5"/>
                                                <path d="M9.61169 12.5833L12.418 11.0299L9.61169 9.59653V12.5833Z" fill="#17204D" fillOpacity="0.5"/>
                                                <circle cx="10" cy="10" r="9.16667" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.833294 9.89299C0.833294 8.80833 0.833294 6.10416 4.04163 3.12499C3.58329 9.89299 7.10158 14.8125 12.0625 14.8125C14.8105 14.8125 17.2252 13.5337 19.1666 11.8829C18.2559 16.0483 14.5456 19.1667 10.107 19.1667C4.98526 19.1667 0.833294 15.0147 0.833294 9.89299Z" fill="black" fillOpacity="0.1"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18.3333 10.0973C18.3333 11.0833 18.3333 13.5417 15.4166 16.25C15.8333 10.0973 12.6349 5.62499 8.12496 5.62499C5.6267 5.62499 3.43155 6.78751 1.66663 8.28827C2.49455 4.50152 5.86756 1.66666 9.90269 1.66666C14.5588 1.66666 18.3333 5.44117 18.3333 10.0973Z" fill="white" fillOpacity="0.1"/>
                                                <path d="M17.9196 9.53014C17.9196 6.04166 15.2083 2.29166 10.8333 2.08333C9.98323 2.04285 7.91667 2.5 7.5 4.58333C11.6128 4.58333 15.8333 8.38724 15.8333 12.5C17.5 12.0833 17.9196 10.594 17.9196 9.53014Z" fill="url(#paint2_linear_3850_1566)" fillOpacity="0.4"/>
                                                <defs>
                                                <filter id="filter0_i_3850_1566" x="3.33337" y="4.58334" width="12.5" height="12.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dy="2"/>
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3850_1566"/>
                                                </filter>
                                                <linearGradient id="paint0_linear_3850_1566" x1="9.58336" y1="3.88889" x2="9.58336" y2="17.7778" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#E1E6F0"/>
                                                <stop offset="1" stopColor="#939CCC"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_3850_1566" x1="9.58337" y1="4.58334" x2="9.58337" y2="17.0833" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#E1E6F0"/>
                                                <stop offset="1" stopColor="#939CCC"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_3850_1566" x1="14.9379" y1="3.57268" x2="10.0443" y2="9.53013" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"/>
                                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>&nbsp;
                                            <span className="bold">55.000</span>
                                        </div>
                                        <div className="d-flex align-items-center sidebar-score">
                                            <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.846 5.58787H14.6667C14.6667 3.32306 13.3097 2 11.0104 2H4.98967C2.69041 2 1.33337 3.32306 1.33337 5.55898V10.441C1.33337 12.6769 2.69041 14 4.98967 14H11.0104C13.3097 14 14.6667 12.6769 14.6667 10.441V10.233H11.846C10.5368 10.233 9.4756 9.19835 9.4756 7.922C9.4756 6.64566 10.5368 5.61098 11.846 5.61098V5.58787ZM11.846 6.5816H14.169C14.4439 6.5816 14.6668 6.79889 14.6668 7.06692V8.75397C14.6636 9.0207 14.4426 9.23617 14.169 9.23928H11.8994C11.2366 9.24798 10.6571 8.80558 10.5068 8.17621C10.4315 7.78553 10.5372 7.38237 10.7955 7.07481C11.0538 6.76724 11.4383 6.58671 11.846 6.5816ZM11.9468 8.35532H12.166C12.4475 8.35532 12.6757 8.13286 12.6757 7.85845C12.6757 7.58403 12.4475 7.36158 12.166 7.36158H11.9468C11.8122 7.36003 11.6825 7.41109 11.5868 7.50336C11.491 7.59562 11.4371 7.72142 11.4371 7.85267C11.4371 8.12803 11.6643 8.35215 11.9468 8.35532ZM4.49201 5.58787H8.25497C8.53644 5.58787 8.7646 5.36541 8.7646 5.091C8.7646 4.81658 8.53644 4.59413 8.25497 4.59413H4.49201C4.21285 4.59411 3.98563 4.81306 3.98238 5.08522C3.98236 5.36058 4.20959 5.5847 4.49201 5.58787Z" fill="white"/>
                                            </svg>&nbsp;
                                            <span className="bold">0.000</span>
                                        </div>
                                    </div>
                                    <div className="side-item menu-item d-flex align-items-center ">
                                        <svg width="27" height="27" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.3264 0.209663C10.4861 0.0663223 10.6973 -0.00881317 10.9135 0.000824898C15.4843 0.137655 19.3044 3.4558 19.9967 7.89063C20.0011 7.91711 20.0011 7.94411 19.9967 7.97059C20.0116 8.18043 19.9407 8.38745 19.7996 8.54585C19.6586 8.70425 19.459 8.80099 19.2451 8.81466L11.5656 9.3211C11.3116 9.34362 11.0597 9.26005 10.8718 9.09092C10.6839 8.92179 10.5774 8.68278 10.5785 8.43261L10.0623 0.889316V0.764928C10.0717 0.552776 10.1667 0.353003 10.3264 0.209663ZM9.79965 11.2936L16.4558 10.8671L16.5011 10.8848C16.7869 10.8895 17.0591 11.0054 17.2579 11.207C17.4566 11.4087 17.5655 11.6795 17.5606 11.9599C17.2984 15.782 14.4962 18.9755 10.6828 19.7982C6.86938 20.621 2.96017 18.8754 1.08778 15.5139C0.537217 14.5457 0.189303 13.4794 0.0644539 12.3775C0.0160314 12.051 -0.00516966 11.7212 0.00106201 11.3913C0.0136823 7.32706 2.90728 3.81907 6.95607 2.9595C7.4462 2.86776 7.93762 3.11248 8.15146 3.55479C8.20469 3.63505 8.2473 3.72164 8.27824 3.81245C8.35414 4.98405 8.43287 6.14455 8.51126 7.30015C8.57318 8.21277 8.63488 9.12233 8.69482 10.0319C8.69173 10.2462 8.7254 10.4594 8.79444 10.6627C8.95695 11.0627 9.36136 11.3165 9.79965 11.2936Z" fill="#DEE0F4"/>
                                        </svg>&nbsp;&nbsp;&nbsp;
                                        <span>Deposit</span>
                                    </div>
                                    <div className="side-item menu-item d-flex align-items-center ">
                                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.70435 1.51898C8.03402 1.51898 7.46373 1.9848 7.30365 2.61265H12.6863C12.5263 1.9848 11.956 1.51898 11.2856 1.51898H8.70435ZM14.2071 2.61264H16.1881C18.2891 2.61264 20 4.34428 20 6.47085C20 6.47085 19.94 7.3711 19.92 8.62477C19.918 8.72401 19.8699 8.82122 19.7909 8.87996C19.3097 9.2354 18.8694 9.52907 18.8294 9.54932C17.1686 10.6632 15.2386 11.447 13.1826 11.8369C13.0485 11.8632 12.9165 11.7934 12.8484 11.6739C12.2721 10.6754 11.1956 10.0253 9.995 10.0253C8.8024 10.0253 7.71586 10.6683 7.12256 11.6678C7.05353 11.7853 6.92346 11.8531 6.7904 11.8278C4.75138 11.4369 2.82141 10.6541 1.17059 9.55945L0.210105 8.89109C0.130065 8.84046 0.08004 8.74932 0.08004 8.64806C0.050025 8.13161 0 6.47085 0 6.47085C0 4.34428 1.71086 2.61264 3.81191 2.61264H5.78289C5.97299 1.1443 7.2036 0 8.70435 0H11.2856C12.7864 0 14.017 1.1443 14.2071 2.61264ZM19.6598 10.8152L19.6198 10.8355C17.5988 12.1924 15.1676 13.0937 12.6163 13.4684C12.2561 13.519 11.8959 13.2861 11.7959 12.9216C11.5758 12.0912 10.8654 11.5443 10.015 11.5443H10.005H9.98499C9.13457 11.5443 8.42421 12.0912 8.2041 12.9216C8.10405 13.2861 7.74387 13.519 7.38369 13.4684C4.83242 13.0937 2.4012 12.1924 0.38019 10.8355C0.370185 10.8254 0.270135 10.7646 0.190095 10.8152C0.10005 10.8659 0.10005 10.9874 0.10005 10.9874L0.170085 16.1519C0.170085 18.2785 1.87094 20 3.97199 20H16.018C18.1191 20 19.8199 18.2785 19.8199 16.1519L19.8999 10.9874C19.8999 10.9874 19.8999 10.8659 19.8099 10.8152C19.7599 10.7849 19.6998 10.795 19.6598 10.8152ZM10.7454 15.0583C10.7454 15.4836 10.4152 15.8177 9.995 15.8177C9.58479 15.8177 9.24462 15.4836 9.24462 15.0583V13.7519C9.24462 13.3367 9.58479 12.9924 9.995 12.9924C10.4152 12.9924 10.7454 13.3367 10.7454 13.7519V15.0583Z" fill="#DEE0F4"/>
                                        </svg>&nbsp;&nbsp;&nbsp;
                                        <span>Currencies</span>
                                    </div>
                                    <div className="side-item menu-item d-flex align-items-center ">
                                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.33037 0.000366211H14.6694C18.0704 0.000366211 19.9904 1.92937 20.0004 5.33037V14.6704C20.0004 18.0704 18.0704 20.0004 14.6694 20.0004H5.33037C1.92937 20.0004 0.000366211 18.0704 0.000366211 14.6704V5.33037C0.000366211 1.92937 1.92937 0.000366211 5.33037 0.000366211ZM10.0494 15.8604C10.4804 15.8604 10.8394 15.5404 10.8794 15.1104V4.92037C10.9194 4.61037 10.7704 4.29937 10.5004 4.13037C10.2194 3.96037 9.87937 3.96037 9.61037 4.13037C9.33937 4.29937 9.19037 4.61037 9.21937 4.92037V15.1104C9.27037 15.5404 9.62937 15.8604 10.0494 15.8604ZM14.6504 15.8604C15.0704 15.8604 15.4294 15.5404 15.4804 15.1104V11.8304C15.5094 11.5094 15.3604 11.2104 15.0894 11.0404C14.8204 10.8704 14.4804 10.8704 14.2004 11.0404C13.9294 11.2104 13.7804 11.5094 13.8204 11.8304V15.1104C13.8604 15.5404 14.2194 15.8604 14.6504 15.8604ZM6.21937 15.1104C6.17937 15.5404 5.82037 15.8604 5.38937 15.8604C4.95937 15.8604 4.59937 15.5404 4.56037 15.1104V8.20037C4.53037 7.88937 4.67937 7.58037 4.95037 7.41037C5.21937 7.24037 5.56037 7.24037 5.83037 7.41037C6.09937 7.58037 6.25037 7.88937 6.21937 8.20037V15.1104Z" fill="#DEE0F4"/>
                                        </svg>&nbsp;&nbsp;&nbsp;
                                        <span>Financial management</span>
                                    </div>
                                    <div className="side-item menu-item d-flex align-items-center ">
                                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.81 0H14.191C17.28 0 19 1.78 19 4.83V15.16C19 18.26 17.28 20 14.191 20H5.81C2.77 20 1 18.26 1 15.16V4.83C1 1.78 2.77 0 5.81 0ZM6.08 4.66V4.65H9.069C9.5 4.65 9.85 5 9.85 5.429C9.85 5.87 9.5 6.22 9.069 6.22H6.08C5.649 6.22 5.3 5.87 5.3 5.44C5.3 5.01 5.649 4.66 6.08 4.66ZM6.08 10.74H13.92C14.35 10.74 14.7 10.39 14.7 9.96C14.7 9.53 14.35 9.179 13.92 9.179H6.08C5.649 9.179 5.3 9.53 5.3 9.96C5.3 10.39 5.649 10.74 6.08 10.74ZM6.08 15.31H13.92C14.319 15.27 14.62 14.929 14.62 14.53C14.62 14.12 14.319 13.78 13.92 13.74H6.08C5.78 13.71 5.49 13.85 5.33 14.11C5.17 14.36 5.17 14.69 5.33 14.95C5.49 15.2 5.78 15.35 6.08 15.31Z" fill="#DEE0F4"/>
                                        </svg>&nbsp;&nbsp;&nbsp;
                                        <span>Transaction reporting</span>
                                    </div>
                                    <div className="side-item menu-item d-flex align-items-center ">
                                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.011 12.602C15.425 12.602 15.761 12.266 15.761 11.852V10C15.761 9.586 15.425 9.25 15.011 9.25H9.319C8.995 8.183 8.013 7.399 6.841 7.399C5.407 7.399 4.24 8.566 4.24 10C4.24 11.435 5.407 12.602 6.841 12.602C8.013 12.602 8.995 11.818 9.319 10.75H11.431V11.852C11.431 12.266 11.767 12.602 12.181 12.602C12.595 12.602 12.931 12.266 12.931 11.852V10.75H14.261V11.852C14.261 12.266 14.597 12.602 15.011 12.602ZM5.666 0H14.335C17.723 0 20 2.378 20 5.917V14.084C20 17.623 17.723 20 14.334 20H5.666C2.277 20 0 17.623 0 14.084V5.917C0 2.378 2.277 0 5.666 0ZM5.7391 10.0009C5.7391 9.3929 6.2341 8.8989 6.8411 8.8989C7.4481 8.8989 7.9431 9.3929 7.9431 10.0009C7.9431 10.6079 7.4481 11.1019 6.8411 11.1019C6.2341 11.1019 5.7391 10.6079 5.7391 10.0009Z" fill="#DEE0F4"/>
                                        </svg>&nbsp;&nbsp;&nbsp;
                                        <span>Access report</span>
                                    </div>
                                </div>
                                
                                <div className="side-item logout-item d-flex align-items-center">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.016 5.38948V4.45648C13.016 2.42148 11.366 0.771484 9.33097 0.771484H4.45597C2.42197 0.771484 0.771973 2.42148 0.771973 4.45648V15.5865C0.771973 17.6215 2.42197 19.2715 4.45597 19.2715H9.34097C11.37 19.2715 13.016 17.6265 13.016 15.5975V14.6545" stroke="#6C50FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19.8094 10.0214H7.76843" stroke="#6C50FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16.8812 7.10632L19.8092 10.0213L16.8812 12.9373" stroke="#6C50FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>&nbsp;&nbsp;&nbsp;
                                    <span><button className='btn' onClick={authService.logout} style={{color:"white"}}>Logout</button></span>
                                </div>
                            </div>
                            
                    </Drawer>
                    <NavLink exact to="/player" className="d-flex align-items-center nav-logo">
                        <img alt="" src="Assets/Logo.png" alt="" style={{width:"80px", height:"30px"}} />                        
                    </NavLink>

                    <ul className={click ? "d-flex align-items-center nav-menu active" : "nav-menu d-flex align-items-center"}>
                        <li className="nav-item navItem">
                            <NavLink
                                exact
                                to="/player"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick} style={{ color: `${navbarFontColor}` }}
                            >
                            PLAY
                            </NavLink>
                        </li>
                        <li className="nav-item navItem">
                            <NavLink
                                exact
                                to="/tournaments"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick} style={{ color: `${navbarFontColor}` }}
                            >
                            TOURNAMENTS
                            </NavLink>
                        </li>
                        <li className="nav-item navItem">
                            <NavLink
                                exact
                                to="/analysis"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick} style={{ color: `${navbarFontColor}` }}
                            >
                            ANALYSIS
                            </NavLink>
                        </li>
                        <li className="nav-item navItem">
                            <NavLink
                                exact
                                to="/account"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick} style={{ color: `${navbarFontColor}` }}
                            >
                            ACCOUNT
                            </NavLink>
                        </li>
                        <li className="nav-item navItem">
                            <NavLink
                                exact
                                to="/rankings"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick} style={{ color: `${navbarFontColor}` }}
                            >
                            RANKINGS
                            </NavLink>
                        </li>    
                    </ul>
                    <ul className={click ? "nav-center nav-menu active mx-auto" : "nav-menu mx-auto"}>
                        <li className="nav-item navItem">
                            <NavLink
                            exact
                            to="/shop"
                            activeClassName="active"
                            className="navItem_center"
                            onClick={handleClick}
                            >
                                <Badge badgeContent={3} color="secondary"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}>
                                    <button type="button" className={iconButtonClass + " btn btn-sm btn-circle btn-nav-icon"}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z" fill={iconColor}/>
                                        </svg>
                                    </button>
                                </Badge>
                            </NavLink>
                        </li>    
                        <li className="nav-item navItem">
                            <NavLink
                            exact
                            to="/academy"
                            activeClassName="active"
                            className="navItem_center"
                            onClick={handleClick}
                            >
                                <Badge badgeContent={5} color="secondary"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}>
                                    <button type="button" className={iconButtonClass + " btn btn-sm btn-circle btn-nav-icon"}>
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2124 4.76241C12.2124 7.40617 10.0489 9.52482 7.34933 9.52482C4.6507 9.52482 2.48631 7.40617 2.48631 4.76241C2.48631 2.11865 4.6507 0 7.34933 0C10.0489 0 12.2124 2.11865 12.2124 4.76241ZM0 14.9174C0 12.47 3.38553 11.8577 7.34933 11.8577C11.3347 11.8577 14.6987 12.4911 14.6987 14.9404C14.6987 17.3877 11.3131 18 7.34933 18C3.364 18 0 17.3666 0 14.9174ZM14.1734 4.84875C14.1734 6.19506 13.7605 7.45131 13.0364 8.49482C12.9611 8.60214 13.0276 8.74683 13.1587 8.76983C13.3407 8.79954 13.5276 8.81774 13.7184 8.82158C15.6167 8.87045 17.3202 7.67362 17.7908 5.87118C18.4885 3.19676 16.4415 0.795428 13.8339 0.795428C13.5511 0.795428 13.2801 0.824175 13.0159 0.876878C12.9797 0.884544 12.9405 0.901792 12.921 0.932455C12.8955 0.971743 12.9141 1.02253 12.9396 1.05607C13.7233 2.13216 14.1734 3.44206 14.1734 4.84875ZM17.3173 10.7023C18.5932 10.9466 19.4317 11.444 19.7791 12.1694C20.0736 12.7635 20.0736 13.4534 19.7791 14.0475C19.2478 15.1705 17.5335 15.5318 16.8672 15.6247C16.7292 15.6439 16.6186 15.5289 16.6333 15.3928C16.9738 12.2805 14.2664 10.8048 13.5658 10.4656C13.5364 10.4493 13.5296 10.4263 13.5325 10.411C13.5345 10.4014 13.5472 10.3861 13.5697 10.3832C15.0854 10.3545 16.7155 10.5586 17.3173 10.7023Z" fill={iconColor}/>
                                        </svg>
                                    </button>
                                </Badge>
                            </NavLink>
                        </li>
                        <li className="nav-item navItem">
                            <NavLink
                            exact
                            to="/shops"
                            activeClassName="active"
                            className="navItem_center"
                            onClick={handleClick}
                            >
                                <button type="button" className={iconButtonClass + " btn btn-sm btn-circle btn-nav-icon"}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.7561 20 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z" fill={iconColor}/>
                                    </svg>
                                </button>
                            </NavLink>
                        </li>                                                                                                                                                                          
                    </ul>
                </div>
                <div className="d-flex">
                    <ul className="nav-menu align-items-center">
                        <li className="nav-item navItem">
                            <div className="nav_right_player form-inline">
                                <select className="form-control form-select-sm" id="users_select" style={ navbarButtonStyle }>
                                    <option value="1">{props.item_register.username}</option>
                                    <option value="2">Takil0</option>
                                </select>
                            </div>
                        </li>
                        <li className="nav-item navItem ">
                            <div className="nav_right form-inline" style={ navbarButtonStyle }>
                                <div className="level">
                                    
                                </div>
                                Level
                            </div>
                        </li> 
                        <li className="nav-item navItem">
                            <div className="nav_right d-flex align-items-center" style={ navbarButtonStyle }>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.58336" cy="10.8333" r="6.94444" fill="url(#paint0_linear_3850_5028)"/>
                                    <g filter="url(#filter0_i_3850_5028)">
                                    <circle cx="9.58325" cy="10.8333" r="6.25" fill="url(#paint1_linear_3850_5028)"/>
                                    </g>
                                    <circle cx="9.58325" cy="10.8333" r="5.75" stroke="#2E2E4D"/>
                                    <path d="M9.61197 6.31946L6.80566 11.0299L9.61197 12.5832L12.4183 11.0299L9.61197 6.31946Z" fill="#17204D" fillOpacity="0.5"/>
                                    <path d="M9.61197 9.59653L6.80566 11.0299L9.61197 12.5833L12.4183 11.0299L9.61197 9.59653Z" fill="#17204D" fillOpacity="0.5"/>
                                    <path d="M9.61197 15.3472L6.80566 11.5158L9.61197 13.0691L12.4183 11.5158L9.61197 15.3472Z" fill="#17204D" fillOpacity="0.5"/>
                                    <path d="M12.4181 11.5158L9.61182 13.0691V15.3472L12.4181 11.5158ZM12.4181 11.0299L9.61182 6.31946V12.5832L12.4181 11.0299Z" fill="#17204D" fillOpacity="0.5"/>
                                    <path d="M9.61182 12.5833L12.4181 11.0299L9.61182 9.59653V12.5833Z" fill="#17204D" fillOpacity="0.5"/>
                                    <circle cx="9.99992" cy="10" r="9.16667" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.833416 9.89299C0.833416 8.80833 0.833416 6.10416 4.04175 3.12499C3.58342 9.89299 7.1017 14.8125 12.0626 14.8125C14.8107 14.8125 17.2253 13.5337 19.1667 11.8829C18.256 16.0483 14.5457 19.1667 10.1071 19.1667C4.98538 19.1667 0.833416 15.0147 0.833416 9.89299Z" fill="black" fillOpacity="0.1"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3334 10.0973C18.3334 11.0833 18.3334 13.5417 15.4167 16.25C15.8334 10.0973 12.635 5.62499 8.12508 5.62499C5.62682 5.62499 3.43167 6.78751 1.66675 8.28827C2.49467 4.50152 5.86768 1.66666 9.90281 1.66666C14.5589 1.66666 18.3334 5.44117 18.3334 10.0973Z" fill="white" fillOpacity="0.1"/>
                                    <path d="M17.9196 9.53014C17.9196 6.04166 15.2083 2.29166 10.8333 2.08333C9.98323 2.04285 7.91667 2.5 7.5 4.58333C11.6128 4.58333 15.8333 8.38724 15.8333 12.5C17.5 12.0833 17.9196 10.594 17.9196 9.53014Z" fill="url(#paint2_linear_3850_5028)" fillOpacity="0.4"/>
                                    <defs>
                                    <filter id="filter0_i_3850_5028" x="3.33325" y="4.58334" width="12.5" height="12.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3850_5028"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_3850_5028" x1="9.58336" y1="3.88889" x2="9.58336" y2="17.7778" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E1E6F0"/>
                                    <stop offset="1" stopColor="#939CCC"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_3850_5028" x1="9.58325" y1="4.58334" x2="9.58325" y2="17.0833" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E1E6F0"/>
                                    <stop offset="1" stopColor="#939CCC"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_3850_5028" x1="14.9379" y1="3.57268" x2="10.0443" y2="9.53013" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>

                                55,000
                            </div>
                        </li>                                               

                        <li className="nav-item navItem">
                            {/* <Link to='/game' > */}
                                <Link type="button" to ={`/splash?name=${props.item_register.username}&room=${room}`} className="btn btn-radius btn-purple text-uppercase" style={{ boxShadow: "0px 4px 10px rgba(108, 80, 250, 0.3)" }} onClick={(event) => GameStart(event)}>
                                    <i className="fas fa-dice-five" />&nbsp;
                                    play game
                                </Link>
                            {/* </Link> */}
                            
                        </li>
                    </ul>                    
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </header>
            <Modal
                size="lg"
                show={createGM}
                onHide={() => setCreateGM(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className=""
            >
                <Modal.Header className="createGMmodal">
                    <button type="" className="close btn" onClick={() => setCreateGM(false)}>
                        <i className="fa fa-times fa-2x cross"></i>
                    </button>
                </Modal.Header>
                <Modal.Body  className="createGMmodal modal-body justify-content-center">
                        <p className="forgot text-center">Create Game</p>
                        <div className="form-inline justify-content-center">
                            <button className="btn btn_match btn-lg">Match Play</button>
                            <button className="btn btn_money btn-lg">Money Game</button>
                        </div>

                        <div className="form-inline justify-content-center mt-5">
                            <div className="create_item">
                                <p className="create_GM">Stake</p>
                                <select className="font-weight-bold form-control select2 select2-hidden-accessible w-100" onChange={e => setStake(e.target.value)} value={stake} tabIndex="-1" aria-hidden="true">
                                    <option selected="selected"></option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>5</option>
                                    <option>7</option>
                                </select> 
                            </div>
                            <div className="create_item ml-5">
                                <p className="create_GM">Length</p>
                                <select className="font-weight-bold form-control select2 select2-hidden-accessible w-100" onChange={e => setLength(e.target.value)} value={length} tabIndex="-1" aria-hidden="true">
                                    <option selected="selected">Select Length</option>
                                    <option>1</option>
                                    <option>3</option>
                                    <option>5</option>
                                    <option>7</option>
                                    <option>9</option>
                                    <option>11</option>
                                </select> 
                            </div>
                            <div className="create_item ml-5">
                                <p className="create_GM">Clock</p>
                                <select className="font-weight-bold form-control select2 select2-hidden-accessible w-100" onChange={e => setClock(e.target.value)} value={clock} tabIndex="-1" aria-hidden="true">
                                    <option selected="selected">Select Clock</option>
                                    <option>Normal (10s+1m)</option>
                                    <option>Speed (8s+0.4m)</option>
                                    <option>Causul (15+3m)</option>
                                    <option>Sophie</option>
                                </select> 
                            </div>
                        </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center createGMmodal">
                    <div className="justify-content-center form-inline mb-5 mt-5">
                        <button className="btn btn_cancel" onClick={() => setCreateGM(false)}>Cancel</button>
                        <button className="btn btn-primary ml-4 btn_create" >Create Game</button>
                    </div>

                </Modal.Footer>
            </Modal>             
        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        item: props.credential,
        item_register: props.cred_register
    }
}
const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ loginShare: login }, dispatch);
}

export default connect(mapStateToProps, mapDistachToProps)(SubNav)