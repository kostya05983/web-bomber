import * as types from './constants';
import AuthService from '../../services/AuthBomberService'

/**
 * make loginRequest to our server
 * @param loginRequest - payload of login request
 * @returns {Function}
 */
export function login(loginRequest) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch login");

            const fetchLogin = AuthService.login(loginRequest);

            dispatch({type: types.LOGIN, payload: fetchLogin})
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * make a signupRequest to our server
 * @param signupRequest - payload of signup request
 */
export function signup(signupRequest) {
    try {
        console.log("Dispatch signup");

        const fetchSignUp = AuthService.signup(signupRequest);

        dispatch({type: types.SIGNUP, payload: fetchSignUp})
    } catch (error) {
        console.error(error)
    }
}

/**
 * Get current auth user from server
 */
export function getCurrentUser() {
    try {
        console.log("Dispatch getCurrentUser");

        const fetchedUser = AuthService.getCurrentUser();

        dispatch({type: types.GET_CURRENT_USER, payload: fetchedUser})
    } catch (error) {
        console.error(error)
    }
}