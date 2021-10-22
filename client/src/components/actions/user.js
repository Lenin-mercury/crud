import axios from 'axios';
import { 
     
    GETALL_USER, 
    GET_USER, 
    USER_ERROR
    
    } from "./types";

// Get all USER

export const getallUser = () => async dispatch => {

    try {
     const res = await axios.get('/api/user/getall');
    //  console.log(res);
     dispatch({
         type: GETALL_USER,
         payload: res.data.getUser
     })
    
    } catch (err) {
        
        // // const errors = err.response.data.errors;
        // if(errors) {
        //     errors.forEach( error => console.log(error));
        // }
        dispatch({
            type: USER_ERROR
        })
    }
}

// Get by id USER

export const getUserById = (id) => async dispatch => {

    try {
     const res = await axios.get(`/api/user/getall/${id}`);
    //  console.log(res);
     dispatch({
         type: GET_USER,
         payload: res.data.getUser
     })
    
    } catch (err) {
        
        // // const errors = err.response.data.errors;
        // if(errors) {
        //     errors.forEach( error => console.log(error));
        // }
        dispatch({
            type: USER_ERROR
        })
    }
}