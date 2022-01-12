import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import authService from '../../../Auth/Service/authService';
import history from '../../../../history';
import { register } from '../../../../Action/register';
import { bindActionCreators } from 'redux';
import './SearchBar.css';
import warnService from '../../../Auth/Service/warnService';

const productsArray = Array();
let socket;

const SearchBar = (props) => {
    const [createGM, setCreateGM] = useState(false);
    const [stake, setStake] = useState("");
    const [length, setLength] = useState("");
    const [clock, setClock] = useState("");

    let input;

    const handleClick = () => {
        props.onSearch(input.value);
    }
    Object.assign(productsArray, props.products);
    const ENDPOINT = "http://localhost:8000";
    useEffect(() => {
        socket = io.connect(ENDPOINT, {
            withCredentials: true,
            extraHeaders: {
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
        socket.emit('nardechain', {room: "nardechain", account: props.item.account}, (error) => {
            console.log('');
        }); 
        authService.getCurrentUser(props.item.account)
            .then(res => {
                if(res.data?.user?.username === '' || res.data?.user?.username === undefined)
                {
                    warnService.failWarn("You have to edit profile");
                    history.push("/account");
                }    
                else {
                    props.registerShare(res.data?.user);
                }
            })
    }, [ENDPOINT])

    const fn_create_gm = () => {
        setCreateGM(false);
        const tmp = { playerA:'sage', ratingA: '5', playerB: 'join', ratingB: '', length: length, clock: clock, stake: stake, view:'', roomID: productsArray.length}
        // props.setProducts(products => [...products, tmp])
        productsArray.push(tmp)
        socket.emit('create_game_room', tmp , (error) => {
            console.log(error);
        });
    }

    const fn_join_gm = (roomID) => {
        // for(var i=0; i<productsArray.length; i++) {
        //     if(parseInt(roomID) === parseInt(productsArray[i].roomID)) {
        //         const tmp = productsArray[i];
        //         productsArray.splice(i, 1);
        //         productsArray.splice(i, 0, { playerA: tmp.playerA, ratingA: tmp.ratingA, playerB: 'drcyber', ratingB: '1', length: tmp.length, clock: tmp.clock, stake: tmp.stake, view:'view', roomID: tmp.roomID})
                
        //         console.log(i, "productsArray")
        //     }
        // }
        socket.emit('join_game_room', roomID , (error) => {
            console.log(error);
        });
        
    }
    
    useEffect(() => {
        socket.on('create_game', product => {
            for(var i=0; i<product.length; i++) {
                if(product[i].playerB !== 'drcyber')
                {
                    product[i].playerB = <button id={product[i].roomID} onClick={(e) => fn_join_gm(e.target.id)} style={{backgroundColor:'#6C50FA', color:'white', width:"100%"}} className='joinbtn btn'>join</button>;
                }
                if(product[i].view !== '')
                {
                    product[i].view = <button className='btn viewbtn' style={{backgroundColor:'#6C50FA', color:'white', width:"100%", height:"35px", padding:"0", borderRadius:"20px!important"}}><i className='far fa-eye fa-2x'></i></button>;
                } else if(product[i].view !== 'view') {
                    // history.push(`/splash?name=sage&room=game`)
                }                    
            }
            Object.assign(productsArray, product)
            props.setProducts(product)
            
            console.log(productsArray, product, "product")
        })
    }, [productsArray]);

    console.log(props.item, "items")
    return(
        <div className="searchbar form-inline">
            <div className="w-100 form-inline">
                <input className="form-control input_player" placeholder="Find player" ref={n => input = n} />
                <button className="btn createGM mr-3" onClick={handleClick}><i className="fa fa-search"></i></button>
                <button className="btn filter mr-3"><strong><i className="fa fa-filter mr-3"></i>Filter</strong></button>
                <Button className="btn btn-purple btn-radius" variant="pills" onClick={() => setCreateGM(true)}>
                    Create Game
                </Button>

            </div>

            <Modal
                size="lg"
                show={createGM}
                onHide={() => setCreateGM(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className=""
            >
                <Modal.Header className="createGMmodal">
                    <button type="" className="closeModal btn" onClick={() => setCreateGM(false)}>
                        <i className="fa fa-times cross"></i>
                    </button>
                </Modal.Header>
                <Modal.Body  className="createGMmodal modal-body justify-content-center">
                        <div className="form-inline justify-content-center">
                            <button className="btn btn_match btn-lg">Match Play</button>
                            <button className="btn btn_money btn-lg">Money Game</button>
                        </div>
                        <div className="form-inline justify-content-center mt-5 modalbody">
                            <div className="create_item">
                                <p className="create_GM">Stake</p>
                                <select defaultValue="0" className="form-control select2 select2-hidden-accessible w-100" onChange={e => setStake(e.target.value)} value={stake} tabIndex="-1" aria-hidden="true">
                                    <option>Enter Stoke</option>
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
                                <select defaultValue="1" className="form-control select2 select2-hidden-accessible w-100" onChange={e => setLength(e.target.value)} value={length} tabIndex="-1" aria-hidden="true">
                                    <option>Select Length</option>
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
                                <select defaultValue="Normal (10s+1m)" className="form-control select2 select2-hidden-accessible w-100" onChange={e => setClock(e.target.value)} value={clock} tabIndex="-1" aria-hidden="true">
                                    <option>Select Clock</option>
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
                        <button className="btn btn-primary ml-4 btn_create" onClick={fn_create_gm} >Create Game</button>
                    </div>

                </Modal.Footer>
            </Modal>       
        </div>
    )
}

const mapStateToProps = (props) => {
    return{
        item: props.credential
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ registerShare: register }, dispatch);
}

export default connect( mapStateToProps, mapDistachToProps )(SearchBar)
