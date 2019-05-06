import {ACCESS_TOKEN} from './constants';
import {API_BASE_URL} from "./constants";

/**
 * Class contains auth function for login,signup and so on
 * @author kostya05983
 */
class AuthBomberService {

    request = (options) => {
        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
        }

        const defaults = {headers: headers};
        options = Object.assign({}, defaults, options);

        return fetch(options.url, options)
            .then(response =>
                response.json().then(json => {
                    if (!response.ok) {
                        return Promise.reject(json);
                    }
                    return json;
                })
            );
    };

    /**
     * GetCurrent user with token
     * @returns {}
     */
    async getCurrentUser() {
        if (!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }
        return await this.request({
            url: API_BASE_URL + "/user/me",
            method: 'GET'
        })
    }

    async login(loginRequest) {
        return await this.request({
            url: API_BASE_URL + "/auth/login",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        })
    }

    async signup(signupRequest) {
        return await this.request({
            url: API_BASE_URL + "/auth/signup",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        })
    }

}