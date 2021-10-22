
import { 
    GETALL_USER, 
    GET_USER, 
    USER_ERROR
    
    } from "../actions/types";

    const initialState ={
    token : localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    // user: null,
    user: null,
    users: [],
    error:{}
    };

export const user = ( state = initialState, action) => {

switch (action.type) {
        
    case GET_USER:
        return {
            ...state,
            user : action.payload.getUser,
            // isAuthenticated: true,
            loading: false
        };

    case GETALL_USER:
        return {
            ...state,
            users: action.payload,
            // isAuthenticated: true,
            loading: false
        };
    
    // case UPDATE_USER:

    // const editedCust = state.users.map(user =>{
    //     if(user._id === action.payload._id){
    //         return User = action.payload;              
    //     }
    //     else{
    //         return User;
    //     }
    // } )
    // return {
    //     ...state,
    //     users : editedCust,

    //     // isAuthenticated: true,
    //     loading: false
    // };
           
    
    // case DELETE_USER:
    //     const filterCust = state.users.filter(user => user._id !== action.payload)
    //     return {
    //      ...state,
    //      // isAuthenticated: true,
    //     //  USERs: [state.USERs.filter(USER => USER._id !== action.payload), ...state.USERs],
    //         users: filterCust,
    //         // _.omit(state, action.payload),
    //     loading: false
    //     }
            
        
    
    case USER_ERROR:
        return {
            ...state,
            // isAuthenticated: true,
            error: action.payload,
            loading: false
        };

    default:
        return state;
}
}

