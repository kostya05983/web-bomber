import {API_BASE_URL} from "./constants";
import request from "./Request";

const RESULT_URL = API_BASE_URL + "/bomber/bomber-api/v1/results";

class ResultService {
    async getResults(formId) {
        return await request({
                url: RESULT_URL + "?formId=" + formId,
                method: "GET"
            }
        )
    }
}

export default new ResultService()
