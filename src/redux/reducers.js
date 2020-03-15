import {LOGIN, LOGOUT, MENU_1} from './actions';
import {combineReducers} from 'redux';

function rxHandleUser(state=false, action) {
    switch(action.type) {
        case LOGIN:
            if(typeof state === 'undefined') {
                return false;
            }
            return action.data;
        case LOGOUT:
            if(typeof state === 'undefined') {
                return false;
            }
            return action.data;
        default:
            return state;
    }
}


function rxHandleMenu(state=false, action)
{
    switch(action.type) {
        case MENU_1:
            return action.data;
        case LOGOUT:
            return action.data;
        default:
            return state;
    }
}


const finalReducer = combineReducers({
    rxHandleUser,
    rxHandleMenu});

export default finalReducer;