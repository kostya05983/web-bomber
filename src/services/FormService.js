import {API_BASE_URL} from "./constants";
import request from "./Request";

const FORM_URL = API_BASE_URL + "/bomber/bomber-api/v1/test-forms";

class FormsService {
    async create(createFormRequest) {
        return await request({
            url: FORM_URL,
            method: "POST",
            body: JSON.stringify(createFormRequest)
    })
    }

    async update(id, updateFormRequest) {
        return await request({
            url: FORM_URL + "/" + id,
            method: "PATCH",
            body: JSON.stringify(updateFormRequest)
    })
    }

    async getAll(offset, limit) {
        return await request({
            url: FORM_URL + "?skip=" + offset + "&take=" + limit,
            method: "GET"
        })
    }

    async run(id) {
        return await request({
            url: FORM_URL + "/" + id + "/run",
            method: "POST"
        })
    }

    async delete(id) {
        return await request({
            url: FORM_URL + "/" + id,
            method: "DELETE"
        })
    }
}

export default new FormsService()
