/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import { ScaleModal } from 'boron';
import { winText } from '../data/strings';
import 'utils/pixelateHelper.js';

class Win extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {showModal: false}
  }

  componentDidMount() {
    this.refs.modal.show();
    window.pixelateBegin();
  }

  render() {
    return (
      <div className="row center"><ScaleModal ref="modal" closeOnClick={false}>
        <div className="image col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <div id="zuhlke" ><canvas id="canvas" width="100" height="100"></canvas></div>
        </div>
        <div className="col-xs-12"><a className="btn btn-default talent" href="https://www.zuehlke.com/gb/en/" target="_top">{winText}</a></div>
      </ScaleModal></div>
    );
  }
}

export default Win
