// import _ from "lodash";

import { CREATE_CUSTOMER, UPDATE_CUSTOMER, 
    DELETE_CUSTOMER,  
    GETALL_CUSTOMER, 
    GET_CUSTOMER, 
    CUSTOMER_ERROR
    
    } from "../actions/types";

    const initialState ={    
    loading: true,
    customer: null,
    customers: [],
    error:{}
    };

export const customer = ( state = initialState, action) => {

switch (action.type) {
        
    case CREATE_CUSTOMER:
        return {
            ...state,
            customers: [action.payload, ...state.customers],
            loading: false
        };

    case GET_CUSTOMER:
        return {
            ...state,
            customer : action.payload,
            loading: false
        };

    case UPDATE_CUSTOMER:
        const editedCust = state.customers.map(customer =>{
            if(customer._id === action.payload._id){
               return customer = action.payload;              
            }
            else{
                return customer;
            }
        } )
        return {
            ...state,
            customers : editedCust,
             loading: false
        };
       
    case GETALL_CUSTOMER:
        return {
            ...state,
            customers: action.payload,
             loading: false
        };
    
    case DELETE_CUSTOMER:
        const filterCust = state.customers.filter(customer => customer._id !== action.payload)
        return {
            ...state,    
            customers: filterCust,
            loading: false
        }
        
    case CUSTOMER_ERROR:
        return {
            ...state,
            customers: null,
            loading: false
        };

        default:
        return state;
}
}

