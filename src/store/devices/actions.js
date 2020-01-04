import * as types from './constants'
import DeviceService from '../../services/DeviceBomberService'

/**
 * Requests devices from server
 * @param offset
 * @param limit
 * @returns {Function}
 */
export function getDevices(offset, limit) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch get devices (offset=%s, limit=%s)", offset, limit);

            const fetchedDevices = DeviceService.getDevices(offset, limit);

            let response = await fetchedDevices;

            console.log("Dispatch response", response);

            dispatch({type: types.GET_DEVICES, payload: response})
        } catch (error) {
            console.error("Error while fetched devices %s", error)
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
            console.log("Dispatch create device(device=%s)", device);

            const createDevice = DeviceService.createDevice(device);

            let response = await createDevice;

            dispatch({type: types.ADD_DEVICE, payload: response});
        } catch (error) {
            console.error("Error while create device", error)
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
            console.log("Dispatch update device (device=%s)", device);

            const updatedDevice = DeviceService.updateDevice(device);

            let response = await updatedDevice;

            dispatch({type: types.UPDATE_DEVICE, payload: response})
        } catch (error) {
            console.error("Error while dispatch update device", error)
        }
    }
}

/**
 * Action for delete device
 * @param id - id of device to remove
 * @returns {Function}
 */
export function deleteDevice(id) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch delete device (id=%s)", id);

            const removedDevice = DeviceService.deleteDevice(id);

            let response = await removedDevice;

            dispatch({type: types.DELETE_DEVICE, payload: response});
        } catch (error) {
            console.error("Error while dispatch delete device", error)
        }
    }
}
