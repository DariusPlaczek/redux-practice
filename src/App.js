import React from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import Counter from './components/Counter'
import reducer from './components/redux'
//import reducer, { inc, dec, del } from './components/redux'
import './App.css';

const store = createStore(reducer)


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
