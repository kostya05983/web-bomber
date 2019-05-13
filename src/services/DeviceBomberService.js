import {API_BASE_URL} from "./constants";

class DeviceService {

    /**
     * GET getDevices with offset and imit
     * @param offset - how many devices we will skip
     * @param limit - how many devices we ca get
     * @returns {Promise<any>}
     */
    async getDevices(offset, limit) {
        return await request({
            url: API_BASE_URL+`/devices?offset=${offset}&limit=${limit}`,
            method: 'GET'
        })
    }

    /**
     * Create device on server
     * @param device - transfer device from gui
     * @returns {Promise<any>}
     */
    async createDevice(device) {
        return await request({
            url: API_BASE_URL+'/devices',
            method: 'POST',
            body: device
        })
    }

    /**
     * Update device on server, update will be determined by key in device
     * @param device -
     * @returns {Promise<any>}
     */
    async updateDevice(device) {
        return await request({
            url: API_BASE_URL+'/devices/',
            method: 'PUT',
            body: device
        })
    }

    /**
     * Remove device from service by id
     * @param id - id of script to remove
     * @returns {Promise<any>}
     */
    async removeDevice(id) {
        return await request({
            url: API_BASE_URL+`/devices?id=${id}`,
            method: 'DELETE',
        })
    }
}

export default new DeviceService()