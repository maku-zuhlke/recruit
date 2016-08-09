/**
 * Created by lewa on 28/06/2016.
 */
import React, { Component } from 'react';

class Instruction extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<div className="col-xs-12">
      <div className="col-xs-10 col-xs-offset-1 center space">{ this.props.instruction }</div>
    </div>);
  }
}

export default Instruction;
