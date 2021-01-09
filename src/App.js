import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import Counter from './components/Counter/Counter'
import Users from "./components/Users/Users";
import rootReducer from './rootReducer'
//import reducer, { inc, dec, del } from './components/redux'
import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk))


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Users />
      </Provider>
    </div>
  );
}

export default App;
