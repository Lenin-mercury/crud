// import _ from "lodash";

import { CREATE_APPROVER,
    GETALL_CUSTOMERS_APPROVER,
    GETALL_USERS_APPROVER,
    GET_CUSTOMER_BYUSER,
    APPROVER_ERROR,
    APPROVER_LOGIN,
    APPROVER_LOGIN_ERROR,
    LOAD_APPROVER
    } from "../actions/types";

    const initialState ={    
    token : localStorage.getItem('token'),
    loading: true,
    approver: null,
    isRegistered:false,
    isAuthenticated:false,
    // approvers: [],
    customers:[],
    users:[],
    error:{}
    };


export const approver = ( state = initialState, action) => {

switch (action.type) {
        
    case CREATE_APPROVER:
        localStorage.setItem('token', action.payload.token);
        return {
            ...state,
            approver: action.payload,
            loading: false,
            isRegistered: true
        };

    case GETALL_CUSTOMERS_APPROVER:
        return {
            ...state,
            customers:action.payload,
            loading: false
        };

    case GETALL_USERS_APPROVER:
        return {
            ...state,
            users:action.payload,
            loading: false
        };

    case GET_CUSTOMER_BYUSER:
        return {
            ...state,
            customers:[action.payload],
            loading: false
        };

    case APPROVER_LOGIN:
        localStorage.setItem('token', action.payload.token);
        return {
            // token:action.payload.token,
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false
        };      

    case LOAD_APPROVER:
        // localStorage.setItem('token', action.payload.token);
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            approver: action.payload
        };        

    case APPROVER_LOGIN_ERROR:
        case APPROVER_ERROR:
        localStorage.removeItem('token');
        return {
            ...state,
            token: null,
            isRegistered: false,
            approver:null,
            loading: false
        
        };
        default:
        return state;
}
}

