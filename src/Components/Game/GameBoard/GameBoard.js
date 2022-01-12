import './GameBoard.css';
import GameLeftBar from './GameLeftBar';
import MainBoard from './MainBoard/containers/MainBoard';
import { connect } from 'react-redux';
// import GameContent from './GameContent';
// import history from '../../../history';

const GameBoard = (props) => {
    // useEffect(() => {
    //     var time_out = setInterval(() => {
    //         clearInterval(time_out);
    //         console.log('game over');
    //         var result = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
    //         localStorage.setItem('result', result);
    //         history.push('/gameover');
    //     }, 10000);
    // })
    console.log(props.item, "gameplay")

    return(
        <div className="game-container">
            <div className="row">
                <GameLeftBar location={props.location} info={props.item}/>
                {/* <GameContent /> */}
                <MainBoard info={props.item}/>
            </div>
        </div>
    )   
    
}


const mapStateToProps = (props) => {
    return{
        item: props.credential
    }
}

export default connect(mapStateToProps)(GameBoard)