import {FETCH_RESULTS} from "./constants";
import ResultService from '../../services/ResultService'

export function getResults(formId) {
    return async (dispatch, getState) => {
        try {
            console.log("Disptach getResult with", formId);

            const results = ResultService.getResults(formId);

            let response = await results;

            console.log("Results", response);
            dispatch({type: FETCH_RESULTS, payload: response.items})
        } catch (error) {
            console.error("Error while disptach getResults", error)
        }
    }
}
