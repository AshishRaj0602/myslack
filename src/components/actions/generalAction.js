import {UPDATE_USER_INFO} from "./constant";

export const generalActions = (props) => {
    return {
      updateUserInfo: (data) => {
        props.dispatch({ type: UPDATE_USER_INFO, data });
      }
    };
  };

  // actions.generalActions.updateUserInfo()
  