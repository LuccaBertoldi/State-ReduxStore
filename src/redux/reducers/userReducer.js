import { SIGNUP_USER } from '../actions/actionTypes';

const initialState = {
    user: null,
    isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        default:
            return state;
    }
};

export default userReducer;