import { combineReducers } from 'redux';

import counterReducer from './components/Counter/redux';
//import UserReducer from './user/redux';

const rootReducer = combineReducers({
    counter: counterReducer,
   // users: userReducer
})

export default rootReducer

