const LOGIN = 'authentication/LOGIN';
const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
const LOGIN_FAIL = 'authentication/LOGIN_FAIL';
const ERROR_MESSAGE = 'authentication/ERROR_MESSAGE';

const initialState = {
    isAuthenticated: false,
    username: null,
    errorMessage: null,
    loading: true
};

// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.result.data.authenticated,
                username: action.result.data.username,
                errorMessage: null
            };
            break;
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                username: null,
                errorMessage: action.result.data.messageKey
            };
            break;
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            };
        default:
            return state;
    }
}

// Public action creators and async actions
/**
 * Displays error message during an authorization/authentication process
 * @param message
 * @returns {{type: string, message: *}}
 */
export function displayAuthError(message) {
    return { type: ERROR_MESSAGE, message };
}

export function login(token) {

}