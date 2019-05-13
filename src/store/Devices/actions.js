import * as types from './constants'
import DeviceService from '../../services/DeviceBomberService'

/**
 * Requests devices from server
 * @param offset
 * @param limit
 * @returns {Function}
 */
export function fetchedDevices(offset, limit) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch fetched Devices", offset, limit);

            const fetchedDevices = DeviceService.getDevices(offset, limit);

            let response = await fetchedDevices;

            console.log("Dispatch response", response);

            dispatch({type: types.FETCHED_DEVICE, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Action for create device on service
 * @param device
 * @returns {Function}
 */
export function createDevice(device) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch create device");

            const createDevice = DeviceService.createDevice(device);

            let response = await createDevice;

            dispatch({type: types.ADD_DEVICE, payload: response});
        } catch(error) {
            console.error(error)
        }
    }
}

/**
 * Action for update device
 * @param device - device to update
 * @returns {Function}
 */
export function updateDevice(device) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch update device");

            const updatedDevice = DeviceService.updateDevice(device);

            let response = await updatedDevice;

            dispatch({type: types.UPDATE_DEVICE, payload: response})
        } catch(error) {
            console.error(error)
        }
    }
}

/**
 * Action for remove device
 * @param id - id of device to remove
 * @returns {Function}
 */
export function removeDevice(id) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch remove device");

            const removedDevice = DeviceService.removeDevice(id);

            let response = await removedDevice;

            dispatch({type: types.REMOVE_DEVICE, payload: response});
        } catch(error) {
            console.error(error)
        }
    }
}