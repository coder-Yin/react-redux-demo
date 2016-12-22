import rootReducer from './reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// new
// import Immutable from 'immutable';
// const state = Immutable.fromJS({});
// const store = rootReducer(state);
// export default createStore(reducer, store);

//old
const finalCreateStore = compose(applyMiddleware(thunk))(createStore);
export default finalCreateStore(rootReducer);
