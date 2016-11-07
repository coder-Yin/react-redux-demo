import * as actionTypes from '../actionType';

export function studentList(state = [], action) {
  switch (action.type) {
    case actionTypes.SET_STUDENTLIST:
      return action.config;
      break;
    case actionTypes.ADD_STUDENT:
      let originList = state;
      originList.push(action.config);
      let newData = JSON.parse(JSON.stringify(originList))
      return newData;
      break;
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

export function enter(state = true, action) {
  switch (action.type) {
    case actionTypes.SET_ENTER:
      return action.config;
    default:
      return state;
  }
}

export function isLoading(state = true, action) {
  switch (action.type) {
    case actionTypes.SET_ISLOADING:
      return action.config;
    default:
      return state;
  }
}
