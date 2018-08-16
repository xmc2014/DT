import React, { Component } from 'react';
import { createStore } from 'redux';
import PropTypes from 'prop-types';

// redux 计数例子

const counter = (state = 0, action) => {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// // 可以手动订阅更新，也可以事件绑定到视图层。
// store.subscribe(() =>{
//   console.log(store.getState())
// });

// // 改变内部 state 惟一方法是 dispatch 一个 action。
// // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
// // 1

class Calculation extends Component {
  constructor() {
    super();
    this.state = {
      newValue: 0
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      // console.log(store.getState())
      this.setState({ newValue: store.getState() })
      console.log(this.state.newValue)
    }); 
  }

  render() {
    return (
      <Counter
        value={this.state.newValue}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    )
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}


export default Calculation;