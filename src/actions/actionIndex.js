import {ADD_PATIENT} from "./actionTypes";

function addPatient(values) {
    return {
        type: ADD_PATIENT,
        payload: values
    }
}

export {
    addPatient
}