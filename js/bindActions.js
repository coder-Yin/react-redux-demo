import * as actions from './action';
import configureStore from './store';

const {dispatch} = configureStore;
 
const bindActions = (actions,dispatch) => {
	let returnObject = {};
	for (let action in actions) {
		let actionItem = actions[action];
		returnObject[action] =  (param)=> dispatch(actionItem(param));
	}

	return returnObject;
}

export default bindActions(actions,dispatch);