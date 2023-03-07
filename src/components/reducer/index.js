import {UPDATE_USER_INFO} from "../actions/constant"

export const generalStates={
    user:null,

}

export const generalReducer = (state, action) => {
    switch (action.type) {
      case UPDATE_USER_INFO:
        return {
          ...state,
          user: action.data,
        };
      default:
        throw new Error("Unexpected action");
    }
  };
  