import { SIGNUP_USER } from './actionTypes';

export const signupUser = (userData) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: SIGNUP_USER, payload: userData });
        }, 1000);
    };
};
