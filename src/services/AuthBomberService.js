import {ACCESS_TOKEN} from './constants';
import {API_BASE_URL} from "./constants";
import request from './Request'

/**
 * Class contains auth function for login,signup and so on
 * @author kostya05983
 */
class AuthBomberService {
    /**
     * GetCurrent user with token
     * @returns {}
     */
    async getCurrentUser() {
        return await request({
            url: API_BASE_URL + "/user/me",
            method: 'GET'
        })
    }

    async login(loginRequest) {
        console.log("Login", loginRequest);
        return await request({
            url: API_BASE_URL + "/auth/login",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        })
    }

    async signup(signupRequest) {
        console.log("Signup", signupRequest);
        return await request({
            url: API_BASE_URL + "/auth/signup",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        });
    }
}

export default new AuthBomberService()