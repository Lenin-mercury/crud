import axios from 'axios';
import { CREATE_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
    GETALL_CUSTOMER,
    // GET_CUSTOMER,
    CUSTOMER_ERROR

    } from "./types";

// Create Customer


export const createCustomer = ({name, phone, email, dob, address, status, medicareID}) => async dispatch => {

    const config = {
        headers: {
            'Content-Type':'application/json',
            'x-auth-token':localStorage.token
        }
    }
    const body = JSON.stringify( {name, phone, email, dob, address, status, medicareID});
    try {
     const res = await axios.post('/api/customer/create', body, config);

     dispatch({
         type: CREATE_CUSTOMER,
         payload: res.data
     })

    } catch (err) {

        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach( error => console.log(error));
        }
        dispatch({
            type: CUSTOMER_ERROR
        })
    }
}


// Get all Customer

export const getallCustomer = () => async dispatch => {

    const config = {
        headers: {
            'Content-Type':'application/json',
            'x-auth-token':localStorage.token
        }
    }
    try {
     const res = await axios.get('/api/customer/getall', config);
    //  console.log(res);
     dispatch({
         type: GETALL_CUSTOMER,
         payload: res.data.getCustomer
     })

    } catch (err) {

        const errors = err.response.data.errors;
        // if(errors) {
        //     errors.forEach( error => console.log(error));
        // }
        dispatch({
            type: CUSTOMER_ERROR,
            payload: errors
        })
    }
}

// Update Customer

export const updateCustomer = (id, {name, phone, email, dob, address, status, medicareID,...rest}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            // 'x-auth-token':localStorage.token
        }
    }
    const body = JSON.stringify( {name, phone, email, dob, address, status, medicareID,...rest});

    try {
     const res = await axios.put(`/api/customer/updatebyid/${id}`,body, config);

     dispatch({
         type: UPDATE_CUSTOMER,
         payload: res.data.getCustomer

     })

    //  dispatch({
    //      type: GETALL_CUSTOMER
    //  })

    } catch (err) {

        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach( error => console.log(error));
        }
        dispatch({
            type: CUSTOMER_ERROR
        })
    }
}


// DELETE Customer

export const deleteCustomer = (id) => async dispatch => {

    try {
     await axios.delete(`/api/customer/deletebyid/${id}`);
    //  console.log(res);
     dispatch({
         type: DELETE_CUSTOMER,
         payload: id
     })

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach( error => console.log(error));
        }
        dispatch({
            type: CUSTOMER_ERROR
        })
    }
}




