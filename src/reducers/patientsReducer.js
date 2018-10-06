import {INITIAL_STATE} from "./initialState";
import { ADD_PATIENT } from "../actions/actionTypes";

const addPatient = (state, action) => {
    return {...state, 
        "patients": [...state.patients, action.payload] 
    };
}

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_PATIENT:
            return addPatient(state, action);
        default:
            return state;
    }
}