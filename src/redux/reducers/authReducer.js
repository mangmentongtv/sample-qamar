import { AUTH_STATE } from "../actionTypes";

const initialState = {
    loading: true,
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_STATE:
            return {...state, isLoggedIn: action.payload, loading: action.loading}
            break;
        default:
            return state;
    }
}

export default authReducer;