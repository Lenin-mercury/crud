import axios from 'axios';
import { CREATE_APPROVER,
    GETALL_CUSTOMERS_APPROVER,
    GETALL_USERS_APPROVER,
    GET_CUSTOMER_BYUSER,
    APPROVER_ERROR,
    APPROVER_LOGIN,
    APPROVER_LOGIN_ERROR,
    LOAD_APPROVER,

    } from "./types";

// Create Customer

export const createApprover = ({name, phone, email, lastname, password}) => async dispatch => {

    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify( {name, phone, email, lastname, password});
    try {
     const res = await axios.post('/api/approver/create', body, config);

     dispatch({
         type: CREATE_APPROVER,
         payload: res.data
     })

    } catch (err) {

        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach( error => console.log(error));
        }
        dispatch({
            type: APPROVER_ERROR
        })
    }
}
// Login Approver

export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify( { email, password});
    try {
     const res = await axios.post('/api/approver/login', body, config);

     dispatch({
         type: APPROVER_LOGIN,
         payload: res.data
     })

    } catch (err) {
        dispatch({
            type: APPROVER_LOGIN_ERROR,
            // payload: errors
        })

    }
}

// Load Approver
export const loadApprover = () => async dispatch => {

    try {
        const config = {
            headers: {
                'x-auth-token':localStorage.token
            }
        }
        const res = await axios.get('/api/approver',config);
        dispatch({
            type: LOAD_APPROVER,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: APPROVER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }

        });
    }
};


// Get all Customer Under Approver

export const getCustsbyApp = (id) => async dispatch => {

    try {
     const res = await axios.get(`/api/approver/getcustsbyapp/${id}`);
    //  console.log(res);
     dispatch({
         type: GETALL_CUSTOMERS_APPROVER,
         payload: res.data.AppCustomers
     })

    } catch (err) {

        // // const errors = err.response.data.errors;
        // if(errors) {
        //     errors.forEach( error => console.log(error));
        // }
        dispatch({
            type: APPROVER_ERROR

        })
    }
}


// Get all Users Under Approver

export const getUsersbyApp = (id) => async dispatch => {

    try {
     const res = await axios.get(`/api/approver/getusersbyapp/${id}`);
    //  console.log(res);
     dispatch({
         type: GETALL_USERS_APPROVER,
         payload: res.data.AppUsers
     })

    } catch (err) {

        // // const errors = err.response.data.errors;
        // if(errors) {
        //     errors.forEach( error => console.log(error));
        // }
        dispatch({
            type: APPROVER_ERROR
        })
    }
}

// Get all Customer Under User ID

export const getCustByUser = (id) => async dispatch => {

    try {
     const res = await axios.get(`/api/approver/getcustbyuser/${id}`);
    //  console.log(res);
     dispatch({
         type: GET_CUSTOMER_BYUSER,
         payload: res.data.getAllCustByUserId
     })

    } catch (err) {

        // // const errors = err.response.data.errors;
        // if(errors) {
        //     errors.forEach( error => console.log(error));
        // }
        dispatch({
            type: APPROVER_ERROR
        })
    }
}

// // Update Customer

// export const updateCustomer = (id, {name, phone, email, dob, address, status, medicareID,...rest}) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type':'application/json'
//         }
//     }
//     const body = JSON.stringify( {name, phone, email, dob, address, status, medicareID,...rest});

//     try {
//      const res = await axios.put(`/api/customer/updatebyid/${id}`,body, config);

//      dispatch({
//          type: UPDATE_CUSTOMER,
//          payload: res.data.getCustomer

//      })

//     //  dispatch({
//     //      type: GETALL_CUSTOMER
//     //  })

//     } catch (err) {

//         const errors = err.response.data.errors;
//         if(errors) {
//             errors.forEach( error => console.log(error));
//         }
//         dispatch({
//             type: APPROVER_ERROR
//         })
//     }
// }


// // DELETE Customer

// export const deleteCustomer = (id) => async dispatch => {

//     try {
//      await axios.delete(`/api/customer/deletebyid/${id}`);
//     //  console.log(res);
//      dispatch({
//          type: DELETE_CUSTOMER,
//          payload: id
//      })

//     } catch (err) {
//         const errors = err.response.data.errors;
//         if(errors) {
//             errors.forEach( error => console.log(error));
//         }
//         dispatch({
//             type: APPROVER_ERROR
//         })
//     }
// }
