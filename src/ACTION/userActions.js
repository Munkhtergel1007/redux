import * as actionTypes from '../constants/userConstants';
import axios from 'axios';

export const getNewUser = user => async dispatch => {
    try {
        dispatch({ type: actionTypes.GET_USERS_REQ })
        const { data } = await axios.post('http://localhost:3001/newUser', user);
        dispatch({
            type: actionTypes.GET_USERS_RES,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: actionTypes.GET_USERS_ERROR,
            error: error.message
        })
    }
}

export const loginUser = user => async dispatch => {
    try {
        dispatch({ type: actionTypes.LOGIN_USERS_REQ })
        const { data } = await axios.post('http://localhost:3001/loginUser', user);
        dispatch({
            type: actionTypes.LOGIN_USERS_RES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_USERS_ERROR,
            error: error.message
        })
    }
}