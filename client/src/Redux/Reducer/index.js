import { GET_GLOBALS, GET_GLOBALS_ID } from "../Actions/types";

const initialState = {
    globals:[],
    globalsId:[]
};

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_GLOBALS:
            return{
                ...state,
                globals: payload
            }

            case GET_GLOBALS_ID:
                return{
                    ...state,
                    globalsId: payload
                }  

        default:
            return state;
    }
}