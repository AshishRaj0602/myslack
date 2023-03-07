import React, { useState,useContext,useEffect ,useRef} from 'react'
import './chatInput.css'
import db from '../../firebase';
import firebase from "firebase/compat/app"
import { StateContext } from '../../StateProvider';
const ChatInput = ({channelName,channelId,messageEl}) => {
    const [input,setInput]=useState('');
    const {state}=useContext(StateContext);
    const [user,SetUser]=useState({});
    useEffect(() => {
      SetUser({
        userName:state.generalStates.user.displayName,
        profilePic:state.generalStates.user.photoURL,
      })
    }, [state])
    const sendMessage=(e)=>{
        e.preventDefault();
        if(channelId){
            console.log( "1234",db.collection('rooms').doc(channelId).collection("messages"))
            db.collection("rooms").doc(channelId).collection('messages').add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user.userName,
                userImage:user.profilePic, 
            })
            if (messageEl) {
              messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
              });
            }
            
          }
          setInput('');
    }
    const inp=(e)=>{
      setInput(e.target.value);
      e.value=''
    }
    
  return (
    <div className='chatInput'>
      <form action="">
        <input type="text" id='input' value={input} placeholder={`Message #${channelName?.toLowerCase()}`} onChange={inp} />
        <button type="submit" onClick={sendMessage}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
