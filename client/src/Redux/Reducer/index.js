import { GET_GLOBALS, GET_GLOBALS_ID, GET_SUCURSALES } from "../Actions/types";

const initialState = {
    globals:[],
    globalsId:[],
    sucursales:[]
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
            case GET_SUCURSALES:
                return{
                    ...state,
                    sucursales: payload
                }      

        default:
            return state;
    }
}