import './App.css';
import { createContext, useContext,useEffect } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom';
import Chat from './components/chatScreen/Chat';
import Login from './components/login/Login';
import {StateContext} from "./StateProvider"
function App() {
  // console.log("hello")
  const {actions,state}=useContext(StateContext);
  const Context=createContext();
  // console.log("actions",actions);
  useEffect(() => {
    // console.log("hehiuhd",state,state?.user)
  }, [state])
  return (
    <Context.Provider value={{actions,state}}>

    <div className="app">
      {
        !state?.generalStates?.user ?<Login/>:<>
        <Header/>

<div className="app_body">
<Sidebar/>
<Routes>
  <Route path='/room/:roomId' element={<Chat/>}/>
</Routes>
</div>
        </>
      }
      
    </div>
    </Context.Provider>
  );
}
export default App;
