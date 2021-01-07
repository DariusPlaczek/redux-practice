import React from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import Counter from './components/Counter'
import reducer, { inc, dec, del } from './components/redux'
import './App.css';


const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

store.dispatch(inc());
store.dispatch(inc());
store.dispatch(del());

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
