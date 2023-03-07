import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import "./sidebarOption.css"
import db from "../../firebase";
const SidebarOption = ({Icon,title,id,addChannelOption}) => {
  // console.log("addChannelOption",addChannelOption)
  const navigate = useNavigate();
  // const [active,setActive]=useState('');
  const selectChannel = (e) =>{
    
    // setActive(e.target);
    if(id){
      navigate(`/room/${id}`)
    }else{
      navigate(title);
    }
  }
  const addChannel =()=>{
    const channelName = prompt('Please enter the Channel Name')
    if(channelName){
      db.collection('rooms').add({
        name:channelName,
      })
    }
  }
  return (
    <div className='sidebarOption' onClick={(addChannelOption ? addChannel :selectChannel)}>
      {
        Icon && <Icon className="sidebarOption_icon"/>
      }
      {
        Icon ? (
            <h3>{title}</h3>
        ):(
            <h3 className='sidebar_channel'>
                <span className='sidebarOption_hash'>#</span>{title}
            </h3>
        )
      }
    </div>
  )
}

export default SidebarOption
