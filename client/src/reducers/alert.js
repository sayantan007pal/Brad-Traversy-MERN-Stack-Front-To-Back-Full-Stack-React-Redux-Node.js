import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = [];


export default function alert(state = initialState, actions){
    const {type, payload} = actions;
    switch(type){
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}