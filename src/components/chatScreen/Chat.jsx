import React,{useEffect, useState,useRef} from 'react'
import './chat.css'
import { useParams } from 'react-router-dom'
import { StarBorderOutlined } from '@material-ui/icons'
import { InfoOutlined } from '@material-ui/icons'
import db from '../../firebase'
import Message from './Message'
import ChatInput from './ChatInput'
import ChatBottom from './ChatBottom'
const Chat = () => {
    const {roomId}=useParams();
    const [roomDetails,setRoomDetails] = useState(null);
    const [roomMessages,setRoomMessages] = useState(["a"]);
    const messageEl = useRef(null)
    let key=1;
    useEffect(() => {
      if(roomId){
        db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
          setRoomDetails(snapshot.data())
        ))
      }
      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot( snapshot =>setRoomMessages(snapshot.docs.map(doc => doc.data()))
      );
      // chatRef?.current?.scrollIntoView();
    }, [roomId]);
  return (
    <div className='chat' ref={messageEl}>
      {/* <h2>You are in the {roomId} room</h2> */}
      <div className="chat_header">
        <div className="chat_headerLeft">
            <h4 className="chat_channelName">
                <strong>#{roomDetails?.name}</strong>
                <StarBorderOutlined/>
            </h4>
        </div>
        <div className="chat_headerRight">
            <p>
                <InfoOutlined/> Details
            </p>
        </div>
      </div>

      <div className="chat_messages">
        {roomMessages.map(({message,user,userImage,timestamp}) =>{
         return(
          <Message key={key++} message={message} user={user} userImage={userImage} timestamp={timestamp}/>
         )
        })}
        {/* <ChatBottom ref={chatRef}/> */}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} messageEl={messageEl}/>
    </div>
  )
}

export default Chat
