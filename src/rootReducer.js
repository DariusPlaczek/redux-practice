import { combineReducers } from 'redux';

import counterReducer from './components/Counter/redux';
import userReducer from './components/Users/redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer
})

export default rootReducer

