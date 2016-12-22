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
    return model.getStudentList().then(response => {
			let studentList = response.data.list;
      dispatch(setStudentList(studentList));

			dispatch(setIsLoading(false));

    });
	};
}

export function setStudentName(config) {
	return {
    type: actionTypes.SET_STUDENTNAME,
    config
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

export function addStudent(config) {
	return {
		type: actionTypes.ADD_STUDENT,
		config
	}
}

export function setIsLoading(config) {
	return {
		type: actionTypes.SET_ISLOADING,
		config
	}
}
