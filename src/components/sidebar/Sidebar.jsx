import React, { useState,useEffect ,useContext} from "react";
import './sidebar.css'
import { FiberManualRecord } from "@material-ui/icons";
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from "./SidebarOption";
import { InsertComment } from "@material-ui/icons";
import { Inbox } from "@material-ui/icons";
import { Drafts } from "@material-ui/icons";
import { BookmarkBorder } from "@material-ui/icons";
import { PeopleAlt } from "@material-ui/icons";
import { Apps } from "@material-ui/icons";
import { FileCopy } from "@material-ui/icons";
import { ExpandLess } from "@material-ui/icons";
import { ExpandMore } from "@material-ui/icons";
import { Add } from "@material-ui/icons";
import db from "../../firebase";
import { StateContext } from "../../StateProvider";
const Sidebar = () => {
    const [channels,setChannels]=useState([])
    
  const {state}=useContext(StateContext);
  const [user,SetUser]=useState({});
  useEffect(() => {
    // console.log("generalStates",state);
    SetUser({
      userName:state.generalStates.user.displayName,
      profilePic:state.generalStates.user.photoURL,
    })
  }, [state])
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot =>(
           setChannels(
            snapshot.docs.map((doc) => ({
                id:doc.id,
                name:doc.data().name
            }))
           )
        ))
    }, [])
    const fun=(e)=>{
      // e.stopPropagation();
    // console.log("first",e.target)
    console.log("e",e.target)
    if(document.getElementById('active')){

      document.getElementById('active').removeAttribute('id')
    }
    // document.getElementsByClassName('active')[0].classList.remove("active");
    console.log(e.target)
    e.target.setAttribute('id','active');
    }
  return (
    <div className="sidebar" onClick={fun}>
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>FSD Linux</h2>
          <h5>
            <FiberManualRecord /> {user.userName}
          </h5>
        </div>

        <CreateIcon/>
      </div>
        <SidebarOption Icon={InsertComment} title="Threads"/>
        <SidebarOption Icon={Inbox} title="Mentions & reactions"/>
        <SidebarOption Icon={Drafts} title="Saved items"/>
        <SidebarOption Icon={BookmarkBorder} title="Channels browser"/>
        <SidebarOption Icon={PeopleAlt} title="People & user group"/>
        <SidebarOption Icon={Apps} title="Apps"/>
        <SidebarOption Icon={FileCopy} title="File browser"/>
        {/* <SidebarOption Icon={ExpandLess} title="Show less" /> */}
        <hr />
        <SidebarOption Icon={ExpandMore} title="Channels" />
        <hr/>
        <SidebarOption Icon={Add} title="Add" addChannelOption='true'/>
        {/* Connect to DB and list of all channels */}
        {/* <SidebarOption ..../>  */}
        {
            channels.map(channel =>(
                <SidebarOption title={channel.name} id={channel.id} key={channel.id}/>
            ))
        }
        <hr/>
    </div>
  );
};

export default Sidebar;
