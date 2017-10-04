//Using React's state, make a button that increments a counter

import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {count: 1};
  }

  onclick(type){
    this.setState({
      count: this.state.count * 2
    })
  }

  render(){
    return(
      <div>
      Count: {this.state.count}
        <br />
        <input type="button" onClick={this.onclick.bind(this)} value='Anything'/>
      </div>
    )
  }
}

export default Button;