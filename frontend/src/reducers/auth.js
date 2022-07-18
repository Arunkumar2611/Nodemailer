import { AUTH, GET_DATA, LOGOUT, SEND_DATA } from '../constant/constant';

const authReducer = (state = { authData: null }, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return {...state, authData: action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        case SEND_DATA:
            JSON.parse(localStorage.getItem('profile'));
            return { ...state, authData: action?.data };
        case GET_DATA:
            return { ...state, authData: action?.data };
        default:
            return state
    }
}

export default authReducer;