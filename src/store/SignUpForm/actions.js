import * as types from './constants'

export function inputName(name) {
    return {
        type: types.INPUT_NAME,
        name: name,
    }
}

export function inputEmail(email) {
    return {
        type: types.INPUT_EMAIL,
        email: email
    }
}

export function inputPassword(password) {
    return {
        type: types.INPUT_PASSWORD,
        password: password,
    }
}