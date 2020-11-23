import {API_BASE_URL} from "./constants";
import request from "./Request";

const REST_SCRIPT_URL = API_BASE_URL+"/bomber/bomber-api/forms";

class FormsService {
    async createForm(createFormRequest) {
        return await request({
            url: REST_SCRIPT_URL,
            method: "POST",
            body: createFormRequest
        })
    }
}