import React from "react";
import { connect } from 'react-redux';
import { inc, del } from './redux';

function CounterContainer(props) {
  const { countValue, addValue, decValue, delValue } = props;
  return (
    <div className="container">
      <h2>Counter: {countValue} </h2>
      <button onClick={() => addValue()}>Add</button>
      <button onClick={() => decValue()}>Subtract</button>
      <button onClick={() => delValue()}>Reset</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countValue: state.counter.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addValue: () => dispatch(inc()),
    decValue: () => dispatch({type: 'counter/COUNTER_DEC'}),
    delValue: () => dispatch(del()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);