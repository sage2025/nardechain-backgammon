import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../../Action';
// import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
// import theme from './Wallet/Metamask/theme';
// import ConnectButton from './Wallet/Metamask/components_metamask/ConnectButton';
// import AccountModal from './Wallet/Metamask/components_metamask/AccountModal';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import { PortisConnector } from '@web3-react/portis-connector';
import { TorusConnector } from '@web3-react/torus-connector';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector'
import Portis from "@portis/web3";
import Web3 from "web3";
import { Arkane } from '@arkane-network/web3-arkane-provider';
// import ArkaneConnect from '@arkane-network/web3-arkane-provider';
// import { useEthers } from '@usedapp/core';
import "@fontsource/inter";
// import { DAppProvider } from "@usedapp/core";
import history from '../../../history';
// import authService from '../Service/authService';
import warnService from '../Service/warnService';
import './Login.css';

const portisConnect = new Portis("b13fab95-3869-4417-878b-e72f869734c4", "mainnet");
var web3 = new Web3(portisConnect.provider);

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })
let n_Arkane = 0;
const Login = (props) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    const web3React = useWeb3React();

    // function handleSave(e) {
    //     const data = {
    //         email: email,
    //         password: password
    //     }
    //     authService.login(email, password)
    //         .then(res => {
    //             props.loginShare(data);
    //             warnService.successWarn("Welcome to visit our site");
    //             history.push("/player");
    //         })
    //         .catch(err => {
    //             warnService.failWarn("Failed login");
    //         });
    // }

    /* login with metamask */
    // useEffect(() => {
    //     if(conn)
    //     {
    //         props.loginShare({email: "a@a.a", password:"a@a.a"});
    //         warnService.successWarn("Welcome to visit our site");
    //         history.push("/player");
    //         console.log("_______")
    //     }
    // }, [conn])
    /* login with metamask */

    /* login with metamask, walletconnect, torus */
    useEffect(() => {
        if(web3React.account)
        {
            props.loginShare({account: web3React.account, email: "a@a.a", password:"a@a.a"});
            warnService.successWarn("Welcome to visit our site");
            history.push("/player");
        }
    }, [web3React.account]);
    /* login with torus */

    /* login with portis */
    useEffect(() => {
        portisConnect.isLoggedIn().then(({ error, result }) => {
            if(result) {
                props.loginShare({account: web3React.account, email: "a@a.a", password:"a@a.a"});
                warnService.successWarn("Welcome to visit our site");
                history.push("/player");
            }
        })
    })
    /* login with portis */
    
    useEffect(() => {
        Arkane.createArkaneProviderEngine({clientId: "Arketype"}).then(provider => {
            web3 = new Web3(provider);
        });
        if(web3React.account !== undefined) {
            Arkane.checkAuthenticated()
                .then((result) => result
                    .authenticated((auth) => {
                        props.loginShare({account: web3React.account, email: "a@a.a", password:"a@a.a"});
                        warnService.successWarn("Welcome to visit our site");
                        history.push("/player");
                    })
                    .notAuthenticated((auth) => {console.log(auth, "auth")})
            )
        }
    }, [n_Arkane])

    /* qr code */
    const walletconnect = new WalletConnectConnector({
        rpc: {
            1: "https://mainnet.infura.io/v3/de7757285d664cb6af8239c7fd98a7cc"
        },
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
        pollingInterval: 12000
    });    
    /* qr code */

    // const portis = new PortisConnector({ dAppId: "1", networks: [100] })

    const torus = new TorusConnector({ chainId: 1 })

    // portisConnect.onLogout(() => {
    //     console.log("User logged out");
    //     document.getElementById("app").innerHTML = ``;
    // });
      

    // let authenticated = false;
    // const arkaneConnect = ArkaneConnect('Arketype', {chains: ['ethereum']});
    // ArkaneConnect.checkAuthenticated()
    //     .then((result) => result.authenticated((auth) => { authenticated = true })
    //                             .notAuthenticated((auth) => { authenticated = false }));
    //         if (!authenticated) {
    //             ArkaneConnect.authenticate();
    //     }
    // const arkaneConnect = new ArkaneConnect('Arketype', {chains: ['ethereum']});
    // Arkane.arkaneConnect.checkAuthenticated({ redirectUri: 'https://arkane.network'});
    
    function fn_arkaneconnect() {
        n_Arkane++;
        Arkane.arkaneConnect().linkWallets();
    }

    return(
        <div className="board"> 
            <div className="justify-content-center form-inline">
                <div className="loginBoard shadow text-center p-3 ">
                    {/* <h5 className="text-left toplabel">Hello Again</h5>
                    <div className="form-inline">
                        <span className="label_welcome">Welcome Back</span>
                        <Link to="/forgotpassword" className="label_forgot">Forgot Password</Link>
                    </div>

                    <div className="form-group mb-4">
                        <i className="fa fa-envelope icon_auth"></i>
                        <input style={{
                            borderRadius: '10px'
                        }} onChange={e => setEmail(e.target.value)} value={email}  className="form-control input_email " type="email" placeholder="Email" required/>
                    </div>

                    <div className="form-group mb-4" >
                        <i className="fa fa-lock icon_auth"></i>
                        <input style={{
                            borderRadius: '10px'
                        }}  onChange={e => setPassword(e.target.value)} value={password} className="form-control input_pass " type="password" placeholder="password" required/>
                    </div>

                    <div className="form-group form-check">
                        <button onClick={handleSave} className="btn btn_login">Login</button>
                    </div> */}
                    <span className="label_below">Sign in with Wallet</span>
                    <div className="form-inline justify-content-center">
                        {/* <div className="col-lg-12 text-center form-inline shadow mt-3" >
                            <img className='float-left col-lg-2' alt="" src="Assets/logo/metamask.png" alt="" style={{width:"5%", height:"5%"}} />
                            <div className='text-right col-lg-10'>
                                <DAppProvider>
                                    <ChakraProvider theme={theme}>
                                        <ConnectButton handleOpenModal={onOpen} setConn={setConn} />
                                        <AccountModal isOpen={isOpen} onClose={onClose} />
                                    </ChakraProvider>

                                </DAppProvider>
                            </div>

                        </div> */}
                        <div className="col-lg-12 text-center form-inline shadow mt-3" >
                            <img className='float-left wallet_avatar' src="Assets/logo/metamask.png" alt="" style={{width:"5%", height:"5%"}} />
                            <div className='text-right wallet_label'>
                                <button className='btn btn-sm metamask' onClick={() => web3React.activate(injected)} style={{width:"150px"}}>METAMASK</button>
                            </div>
                        </div>

                        <div className="col-lg-12 text-center form-inline shadow mt-3" >
                            <img className='float-left wallet_avatar' src="Assets/logo/walletconnect.png" alt="" style={{width:"5%", height:"5%"}} />
                            <div className='text-right wallet_label'>
                                {/* <Web3ReactProvider getLibrary={getLibrary}> */}
                                    <button className='btn btn-sm walletconn' onClick={() => web3React.activate(walletconnect)} style={{width:"150px"}}>WALLETCONNECT</button>
                                {/* </Web3ReactProvider> */}
                            </div>
                        </div>
                        <div className="col-lg-12 text-center form-inline shadow mt-3" >
                            <img className='float-left wallet_avatar' src="Assets/logo/portis.png" alt="" style={{width:"5%", height:"5%"}} />
                            <div className='text-right wallet_label'>
                                <button className='btn btn-sm portis' onClick={() => web3.eth.getAccounts()} style={{width:"150px"}}>PORTIS</button>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center form-inline shadow mt-3" >
                            <img className='float-left wallet_avatar' src="Assets/logo/torus.png" alt="" style={{width:"5%", height:"5%"}} />
                            <div className='text-right wallet_label'>
                                <button className='btn btn-sm torus' onClick={() => web3React.activate(torus)} style={{width:"150px"}}>TORUS</button>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center form-inline shadow mt-3" >
                            <img className='float-left wallet_avatar' src="Assets/logo/arkane.png" alt="" style={{width:"5%", height:"5%"}} />
                            <div className='text-right wallet_label'>
                                <button className='btn btn-sm arkane' onClick={fn_arkaneconnect} style={{width:"150px"}}>ARKANE</button>
                            </div>
                        </div>

                        {/* <Logo logo="Assets/logo/logo_metamask.png" marginLeft="-20px" label="METAMASK"  width="60px"/>
                        <Logo logo="Assets/logo/logo_walletconnect.png" marginLeft="-30px" label="WALLENTCONNECT" width="80px" />
                        <Logo logo="Assets/logo/logo_ports.png" marginLeft="-20px" label="PORTS" width="60px" />
                        <Logo logo="Assets/logo/logo_TOURS.png" marginLeft="-20px" label="TOURS" width="60px" />
                        <Logo logo="Assets/logo/logo_apkane.png" marginLeft="-20px" label="APKANE" width="60px" /> */}
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <span className="label_footer">
                            {/* Don't have account yet?<Link className="ml-3" to="/register">Sign up</Link> */}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        item: props.credential
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ loginShare: login }, dispatch);
}

export default connect(mapStateToProps, mapDistachToProps)(Login)
