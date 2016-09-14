import * as actionTypes from './actionType';
import * as model from './model';

export function setStudentList(config) {
	return {
        type: actionTypes.SET_STUDENTLIST,
        config
    }
}

export function getStudentList() {
	return dispatch => {
        return dispatch(setStudentList(model.getStudentList()));
    }
}

export function setStudentGenderType(config) {
    return {
        type: actionTypes.SET_STUDENTGENDERTYPE,
        config
    }
}

export function setEnter(config) {
    return {
        type: actionTypes.SET_ENTER,
        config
    }
}
