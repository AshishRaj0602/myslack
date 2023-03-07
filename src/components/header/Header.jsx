import { Avatar } from '@material-ui/core'
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/Help"
import React,{useContext,useState,useEffect} from 'react'
import './header.css'
import { StateContext } from '../../StateProvider';
// import {generalStates} from '../reducer/index'
const Header = () => {
  const {state}=useContext(StateContext);
  const [user,SetUser]=useState({});
  useEffect(() => {
    // console.log("generalStates",state);
    SetUser({
      userName:state.generalStates.user.displayName,
      profilePic:state.generalStates.user.photoURL,
    })
  }, [state])
  return (
    <div className='header'>
      <div className="header_left">
        {!user?.profilePic?<img id="header_avtar"src={user?.profilePic} alt="Avtar"/>:
        <Avatar className="header_avatar" src={user?.profilePic} alt='Avtar'></Avatar>
        }{user?.userName}
        <AccessTimeIcon/>
        {/* Avtar for login user */}
        {/* Time icon */}
      </div>
      <div className="header_search">
        {/* Search icon */}
        <SearchIcon/>
        {/* input */}
        <input type="text" placeholder="Newton School MIA university"/>
      </div>
      <div className="header_right">
        {/* help icon */}
        <HelpOutlineIcon/>
      </div>
    </div>
  )
}

export default Header
