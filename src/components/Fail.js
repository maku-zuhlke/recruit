/**
 * Created by lewa on 22/07/2016.
 */
import React, { Component } from 'react';
import { ScaleModal } from 'boron';

class Fail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showModal: false }
  }

  componentDidMount() {
    this.refs.modal.show();
  }

  render() {
    return (
      <div className="row center failModal"><ScaleModal ref="modal" closeOnClick={false}>
        <div className="fail col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <h1>{ this.props.text }</h1>
          <a href="/">Try again</a>
        </div>
      </ScaleModal></div>
    );
  }
}

export default Fail

