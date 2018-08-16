import React, {Component} from 'react';

// react 组件运用 例子

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            info: []
        }
    }
    handleSubmit(object) {
        console.log(object);
        this.state.info.push(object);
        this.setState({info: this.state.info})
    }
    render() {
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
                <CommentList listContent={this.state.info}/>
            </div>
        )
    }
}

class CommentInput extends Component {
    handleClick() {
        let inpText = this.refs.inp.value;
        let txtText = this.refs.txt.value;
        if (this.props.onSubmit) {
            this.props.onSubmit({inpText, txtText});
        }
    }
    render() {
        return (
            <div>
                <input ref="inp" style={{
                    display: 'block',
                    width: 300
                }}/>
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