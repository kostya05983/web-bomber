import * as types from './constants'

export function setIsOpen(isOpen) {
    return {type: types.SET_IS_OPEN, payload: isOpen}
}