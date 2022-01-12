import { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Messagebox from "./Messagebox/Messagebox";
import './Gamechat.css';

let socket;

const Gamechat = ({ location }) => {
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState(''); 
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = "http://localhost:8000";

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name);
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);//add new messages to our messages array the ... copies the old messages and all we do is append the new
        });

        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        if(message)
            socket.emit('sendMessage', message, () => setMessage(''))
    }

    return(
        <div id="game-chat">
            {/* <Messagebox messages={messages} name={name} /> */}
            <div id="chat-panel">
                <Messagebox messages={messages} name={name} />
            </div>
            <div className="input-group">
                <textarea className="form-control col-lg-11" id="chat-textarea" rows="1" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
                <span className="input-group-text col-lg-1" id="chat-action">
                    <button className="btn btn-circle btn-sm btn-purple text-center" onClick={(e) => sendMessage(e)}>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.0189 1.59229C12.7104 1.2757 12.2539 1.15776 11.8282 1.28191L1.90196 4.16845C1.45284 4.29322 1.13451 4.6514 1.04876 5.10642C0.961154 5.56951 1.26715 6.15737 1.66691 6.40319L4.77064 8.31079C5.08897 8.50633 5.49984 8.45729 5.76327 8.1916L9.31735 4.6154C9.49626 4.42917 9.79238 4.42917 9.97129 4.6154C10.1502 4.79542 10.1502 5.08717 9.97129 5.2734L6.41104 8.85023C6.14699 9.11529 6.09764 9.5281 6.29197 9.84841L8.18839 12.9833C8.41048 13.3557 8.79297 13.5668 9.21248 13.5668C9.26183 13.5668 9.31735 13.5668 9.36671 13.5606C9.8479 13.4985 10.2304 13.1695 10.3723 12.7039L13.315 2.79036C13.4446 2.36824 13.3273 1.90888 13.0189 1.59229Z" fill="white"/>
                        </svg>
                    </button>
                </span>
                
            </div>
        </div>

    )
}

export default Gamechat;