import axios from 'axios';
import { REGISTER_SUCCESS,
        REGISTER_FAILED,
        USER_LOADED,
        AUTH_ERROR,
        LOGIN_SUCCESS,
        LOGIN_FAILED,
        LOGOUT,
        CLEAR_PROFILE

    } from "./types";

// Register User

export const register = ({name,lastname,email, password}) => async dispatch => {

    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify( {name, lastname, email, password});
    try {
     const res = await axios.post('/api/user/create', body, config);

     dispatch({
         type: REGISTER_SUCCESS,
         payload: res.data
     })

    } catch (err) {

        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach( error => console.log(error));
        }
        dispatch({
            type: REGISTER_FAILED
        })
    }
}

// Load User
export const loadUser = () => async dispatch => {

    try {
        const config = {
            headers: {
                'x-auth-token':localStorage.token
            }
        }
        const res = await axios.get('/api/user', config);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: AUTH_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
            payload: errors
        });
    }
};


// Login User

export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify( { email, password});
    try {
     const res = await axios.get('/api/user/login', body, config);

     dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data
     })

    // dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        dispatch({
            type: LOGIN_FAILED,
            // payload: { msg: err.response.statusText, status: err.response.status }
            payload: errors
        })

    }
}

//LOGOUT / CLEAR PROFILE

export const logout = () => dispatch => {

    dispatch({type: CLEAR_PROFILE});
    dispatch({type: LOGOUT});
}

