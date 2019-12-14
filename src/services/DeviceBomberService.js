import {API_BASE_URL} from "./constants";
import request from "./Request";

const DEVICE_SCHEMA_URL = API_BASE_URL + "devices";

class DeviceService {

    async createDevice(createDeviceRequest) {
        return await request({
            url: DEVICE_SCHEMA_URL,
            method: 'POST',
            body: createDeviceRequest
        })
    }

    async updateDevice(id, updateDeviceRequest) {
        return await request({
            url: DEVICE_SCHEMA_URL + '/' + id,
            method: 'PATCH',
            body: updateDeviceRequest
        })
    }

    async getDevice(id) {
        return await request({
            url: DEVICE_SCHEMA_URL + "/" + id,
            method: 'GET'
        })
    }

    async getDevices(offset, limit) {
        return await request({
            url: DEVICE_SCHEMA_URL + "?limit=" + limit + "&offset=" + offset,
            method: 'GET'
        })
    }

    async deleteDevice(id) {
        return await request({
            url: DEVICE_SCHEMA_URL + "/" + id,
            method: 'DELETE'
        })
    }
}

export default new DeviceService()