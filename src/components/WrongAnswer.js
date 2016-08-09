/**
 * Created by lewa on 29/06/2016.
 */
import React, { Component } from 'react';
import { wrongAnswerText } from '../data/strings';

class WrongAnswer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="col-xs-10 col-xs-offset-1 center space">{wrongAnswerText}</div>
      </div>
    );
  }
}

export default WrongAnswer
