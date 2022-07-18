import * as api from '../api';
import { AUTH, GET_DATA, SEND_DATA } from '../constant/constant';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        /* Log in the user */
        /* we use navigate bcz after login we will navigate to the home page */
        const { data } = await api.signIn(formData);
        
        dispatch({type: AUTH, data});

        navigate('/')
    } catch (error) {
        console.log(error.message);
    }
}


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        /* Sign up in the user */
        /* we use navigate bcz after login we will navigate to the home page */
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        navigate('/')
    } catch (error) {
        console.log(error.message);
    }
}

export const sendData = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.sendData({email: formData});
        dispatch({ type: SEND_DATA, data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getData = () => async (dispatch) => {
    try {
        const { data } = await api.getData();
        dispatch({type: GET_DATA, data});
    } catch (error) {
        console.log(error.message);
    }
}