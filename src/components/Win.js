/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import { ScaleModal } from 'boron';
// import { Link } from 'react-router';
import { winText } from '../data/strings';
import 'utils/pixelateHelper.js';
import {WINTRGARDEN_REGISTRATION} from "../data/externalLinks";

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
      <div className="row center win"><ScaleModal ref="modal" closeOnClick={false}>
        <div className="image col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <div className="zuhlke"><canvas id="canvas" width="200" height="200"></canvas></div>
        </div>
        <div className="col-xs-12"><a href={WINTRGARDEN_REGISTRATION} rel="external" className="btn btn-default talent btn-lg"><span>{winText}</span></a></div>
      </ScaleModal></div>
    );
  }
}

export default Win

