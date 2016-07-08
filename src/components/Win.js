/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import { ScaleModal } from 'boron';
import begin from 'styles/pixelate.js';

class Win extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {showModal: false}
  }

  componentDidMount() {
    this.refs.modal.show();
    begin();
  }

  render() {
    return (
      <div className="row center"><ScaleModal ref="modal">
          <div className="image col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <div id="zuhlke" ><canvas id="canvas" width="100" height="100"></canvas></div>
          </div>
      </ScaleModal></div>
    );
  }
}

export default Win

