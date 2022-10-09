import React, { Component } from 'react'
import BoxClass from './BoxClass';
export default class AppClass extends Component {

    constructor(props){  // constructor 안에 state 만든다
        super(props);
        this.state = {
            counter2 : 0,
            num : 1,
            value : 0
        };
        console.log("constructor");
    }

    increase = () => {
        this.setState({counter2 : this.state.counter2 + 1,
            value : this.state.value + 1,
        });
        console.log("increase function", this.state);
    }

    componentDidMount(){    // api 콜 (render 끝나고 나면 호출됨)
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate", this.state);
    }

  render() {    // UI 그려준다
    console.log("render");
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
       {this.state.counter2 < 3 && <BoxClass num={this.state.value}/> }
      </div>
    )
  }
}