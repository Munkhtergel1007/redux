import * as actionTypes from '../constants/userConstants';
export const getUsers = (state = { user: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USERS_REQ:
            return {
                loading: true
            }
        case actionTypes.LOGIN_USERS_RES:
            return {
                id: action.payload,
                loading: false
            }
        case actionTypes.LOGIN_USERS_ERROR:
            return {
                error: action.error
            }
        default: return state
    }
}