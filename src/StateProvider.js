import React,{createContext,useReducer} from "react";
import { useActions } from "./components/actions/Action";
import { generalStates } from "./components/reducer";
import {reducer} from "./components/reducer/reducer"
export const StateContext = createContext(generalStates);

export const StateProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,generalStates);
    const actions = useActions(state, dispatch);
    return(
    <StateContext.Provider value={{ state, dispatch, actions }}>
        {children}
    </StateContext.Provider>
    )
}
