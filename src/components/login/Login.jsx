import { Button } from '@material-ui/core'
import React,{useContext} from 'react'
import { auth,provider } from '../../firebase'
import './login.css'
import { StateContext } from '../../StateProvider'
const Login = () => {
  const {actions,state}=useContext(StateContext);
    const signIn=(e)=>{
        auth.signInWithPopup(provider)
        .then(result => {
            actions.generalActions.updateUserInfo(result.user.multiFactor.user);
            // console.log("huhiuuihhuh22222",result.user.multiFactor.user)
            // actions.generalActions.updateUserInfo(
            //   ...name,
            // )
        })
        .catch((error)=>{
            alert(error.message);
        });
    }
  return (
    <div>
      <div className="login">
        <div className="login_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Logo" />
            <h1>Sign in</h1>
            <p>Ashish.slack.com</p>
            <Button onClick={signIn}>Sign In With Googal</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
