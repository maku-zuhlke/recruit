/**
 * Created by lewa on 28/06/2016.
 */
import React, { Component } from 'react';

class Instruction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { instruction: this.props.instruction };
  }

  render() {
    return (<div className="col-xs-12 ">
      <div className="col-xs-3"></div>
      <div className="col-xs-6 center space">{this.state.instruction}</div>
      <div className="col-xs-3"></div>
    </div>);
  }
}

export default Instruction;
