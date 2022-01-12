import { HashRouter, Switch, Route, Router } from 'react-router-dom';
import history from '../history';
import Navbar from '../Layouts/Navbar/Navbar';
import Account from './MainContents/Account/Account';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import Player from './MainContents/Player/Player';
import Tournaments from './MainContents/Tournaments/Main/Tournaments';
import Analysis from './MainContents/Analysis/Main/Analysis';
import './MainContent.css'
import Ranking from './MainContents/Ranking/Main/Ranking';
import CoinFooter from './Coin/CoinFooter/CoinFooter';
import Header from './Coin/Header/Header';
import BuyCoins from './Coin/Content/BuyCoins/BuyCoins'
import { connect } from 'react-redux';
import AboutUs from './Coin/Content/AoutUs/AboutUs';
import Home from './Coin/Content/Home/Home';
import Affiliates from './Coin/Content/Affiliates/Affiliates';
import Members from './Coin/Content/Members/Members';
import Join from './Coin/Content/Join/Join';
import Tutorial from './Coin/Content/Tutorial/Tutorial';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import GameSplash from './Game/GameSplash/GameSplash';
import GameBoard from './Game/GameBoard/GameBoard';
import Resetpassword from './Auth/Resetpassword/Resetpassword';
import Forgotpassword from '../Components/Auth/Forgotpassword/Forgotpassword'
import PreTournament from './MainContents/PreTournament/PreTournament';
import VerifyEmailRegister from './Auth/Register/VerifyEmailRegister/VerifyEmailRegister';
import Metamask from './Auth/Login/Wallet/Metamask/index';
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'

const MainContent = (props) => {
    function getLibrary(provider) {
        const library = new Web3Provider(provider);
        library.pollingInterval = 12000;
        return library;
    }
  
    return(
        <div >
            {
                typeof(props.coin.coin_passed) === "undefined" ?
                <div className="backgammon">
                    <HashRouter>
                        {
                            typeof(props.item.email) != "undefined" ? 
                            <div>
                                <Navbar/>
                                {
                                    typeof(props.item.gameState) === "undefined" ?
                                    (
                                        <div className="form-inline">
                                            <Sidebar/>
                                            <div className="content shadow">
                                                <Router history={history}>
                                                    <Switch>
                                                        <Route path="/player" component={Player} />
                                                        <Route path="/tournaments" component={Tournaments} />
                                                        <Route path="/pretournament" component={PreTournament} />
                                                        <Route path="/analysis" component={Analysis} />
                                                        <Route path='/account' component={Account} />
                                                        <Route path='/rankings' component={Ranking} />
                                                    </Switch>
                                                </Router>
                                            </div>

                                        </div>
                                    ) :
                                    (
                                        <Router history={history}>
                                            <Switch>
                                                <Route path="/splash" component={GameSplash} />
                                                <Route path="/gameplay" component={GameBoard} />
                                            </Switch>
                                        </Router>
                                    )
                                }
                            </div>
                            : 
                            <div>
                                <Router history={history}>
                                    <Web3ReactProvider getLibrary={getLibrary}>
                                        <Route exact path="/" component={Login} />
                                    </Web3ReactProvider>
                                    {/* <Route path="/" component={MainBoard} /> */}
                                    <Route path="/metamask" component={Metamask} />
                                    <Route path="/register" component={Register} />
                                    <Route path="/verifyEmailRegister" component={VerifyEmailRegister} />
                                    <Route path="/forgotpassword" component={Forgotpassword} />
                                    <Route path="/resetpassword/:email/:token" component={Resetpassword} />
                                </Router>
                            </div>
                        }
                    </HashRouter>

                </div>
                :
                <div className='form-inline text-center'>
                    <HashRouter>
                        <Header/>
                        <div className='form-inline w-100'>
                            <Router history={history}>
                                <Switch>
                                    <Route exact path="/" component={BuyCoins} />
                                    <Route path="/coin/home" component={Home} />
                                    <Route path="/coin/aboutus" component={AboutUs} />
                                    <Route path="/coin/affiliates" component={Affiliates} />
                                    <Route path="/coin/members" component={Members} />
                                    <Route path="/coin/join" component={Join} />
                                    <Route path="/coin/tutorial" component={Tutorial} />

                                </Switch>
                            </Router>
                        </div>

                        <CoinFooter/>
                    </HashRouter>                

                </div>
            }



        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        item: props.credential,
        coin: props.coin,
    }
}


export default connect(mapStateToProps)(MainContent)