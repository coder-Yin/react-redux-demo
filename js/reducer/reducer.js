import * as actionTypes from '../actionType';
import Immutable from 'immutable';

export function isLoading(state = true, action) {
  // debugger;
  switch (action.type) {
    case actionTypes.SET_ISLOADING:
      return action.config;
    default:
      return state;
  }
}

// state = Immutable.List([])

export function studentList(state = Immutable.List([]), action) {
  switch (action.type) {
    case actionTypes.SET_STUDENTLIST:

      //old
      // return action.config;
      //new
      return Immutable.fromJS(action.config);
      break;
    case actionTypes.ADD_STUDENT:

      // //old
      // state.push(action.config);
      // let newState = JSON.parse(JSON.stringify(state));
      // return state;

      //new
      let newState = state.push(Immutable.fromJS(action.config));
      return newState;
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
