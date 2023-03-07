import {generalActions} from './generalAction'

export const useActions =(state,dispatch) =>{
    return {
        generalActions: generalActions({ state, dispatch }),
    }
}