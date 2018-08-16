import React, { Component } from 'react';
import { createStore } from 'redux';

// redux 数组对象例子


const add = (obj) => {
  return { type: 'add', data: obj };
}

const list = (state = {list:[]}, action) => {

  switch (action.type) {
    case 'add':
      console.log(action.data);
      // return state.push(action.data);
      return Object.assign({}, state, {
        list: [
          ...state.list,
          action.data
        ]
      })
    default:
      return state;
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(list);

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      console.log(store.getState())
      this.setState({ info: store.getState().list });
    });
  }

  handleSubmit(object) {
    // console.log(object);
    store.dispatch(add(object));
  }

  render() {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit.bind(this)} />
        <CommentList listContent={this.state.info} />
      </div>
    )
  }
}

class CommentInput extends Component {
  handleClick() {
    let inpText = this.refs.inp.value;
    let txtText = this.refs.txt.value;
    if (this.props.onSubmit) {
      this.props.onSubmit({ inpText, txtText });
      
    }
  }
  render() {
    return (
      <div>
        <input ref="inp" style={{
          display: 'block',
          width: 300
        }} />
        <textarea ref="txt" style={{
          display: 'block',
          width: 300,
          height: 100,
          marginTop: 20
        }}></textarea>
        <button onClick={this.handleClick.bind(this)}>发布</button>
      </div>
    )
  }
}

class CommentList extends Component {
  static defaultProps = {
    listContent: []
  }
 
  render() {
    return (
      <ul>
        {
          this.props.listContent.map((item, index) => {
            return (
              <li key={index} style={{
                listStyle: 'none'
              }}>
                <span >{item.inpText}--</span>
                <span>{item.txtText}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}


export default CommentApp;