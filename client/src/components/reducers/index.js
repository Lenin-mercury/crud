import { combineReducers} from 'redux';
import {auth} from './auth';
import {customer} from './customer'
import {approver} from './approver'

export default combineReducers({
    auth,
    customer,
    approver
});

