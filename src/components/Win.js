/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import { ScaleModal } from 'boron';
import begin from 'utils/pixelate.js';

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
          <div className="image col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
            <div id="zuhlke" ><canvas id="canvas" width="100" height="100"></canvas></div>
          </div>
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
            <a className="btn btn-default submit talent" href="https://www.zuehlke.com/ch/en/" target="_top">Do you want to become a registered talent of Zühlke</a>
          </div>
      </ScaleModal></div>
    );
  }
}

export default Win

