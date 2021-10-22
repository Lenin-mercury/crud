import { REGISTER_SUCCESS, REGISTER_FAILED,
    USER_LOADED, AUTH_ERROR,
    LOGIN_FAILED, LOGIN_SUCCESS,
    LOGOUT,
    } from "../actions/types";

    const initialState ={
    token : localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null,
    isRegistered: null
    };

export const auth = ( state = initialState, action) => {

switch (action.type) {
    case USER_LOADED:
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: action.payload
        };
    case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
            ...state,
            ...action.payload,
            isAuthenticated: false,
            isRegistered: true,
            loading: false
        };
    case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false
        };

    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case AUTH_ERROR:
    case LOGOUT:
        localStorage.removeItem('token');
        return {
            ...state,
            token: null,
            isAuthenticated: false,
            user:null,
            loading: false
        };
    default:
        return state;
}
}



