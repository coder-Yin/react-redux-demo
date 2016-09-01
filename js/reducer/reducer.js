import * as actionTypes from '../actionType';

export function studentList(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_STUDENTLIST:
            return action.config;
        default:
            return state;
    }
}

export function studentGenderType(state = '0', action) {
    switch (action.type) {
        case actionTypes.SET_STUDENTGENDERTYPE:
            return action.config;
        default:
            return state;
    }
}