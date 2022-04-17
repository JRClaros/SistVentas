import axios from "axios";
import { cloudynary } from "../../helpers/cloudinary.js";


import { GET_GLOBALS, GET_GLOBALS_ID } from './types.js';

export const getAllGlobals = () =>{
    return async function (dispatch){
        let json = await axios("http://localhost:3001/GetGlobal");
        return dispatch({
            type: GET_GLOBALS,
            payload: json.data
        });
    }
}

export const getAllGlobalsById = (id) =>{
    return async function (dispatch){
        let json = await axios(`http://localhost:3001/GetGlobal/${id}`);
        return dispatch({
            type: GET_GLOBALS_ID,
            payload: json.data
        });
    }
}

export const updateGlobals = (id,payload) =>{
    return async function (dispatch){
        let json = await axios.put(`http://localhost:3001/GetGlobal/${id}`,payload); 
    }
}

export function postGlobals(payload) {
    return async function () {
      const post = await axios.post(`http://localhost:3001/ConfigGral`, payload);
      return post;
    };
  }

export const deleteGlobals = (id) =>{
    return async function (dispatch){
        let json = await axios.delete(`http://localhost:3001/GetGlobal/${id}`); 
    }
} 

export const uploadImageCloud = (formData) => {
    return async (dispatch) => {
      const resp = await cloudynary(formData);
      const body = await resp.data.secure_url;
      return body;
    };
  };