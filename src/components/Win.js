/**
 * Created by lewa on 27/06/2016.
 */
import React, {Component} from 'react';
import {ScaleModal} from 'boron';
// import { Link } from 'react-router';
import {winText} from '../data/strings';
import 'utils/pixelateHelper.js';
import {WINTRGARDEN_REGISTRATION} from "../data/externalLinks";
import * as RestartAction from '../actions/restart';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export class Win extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {showModal: false}
  }

  componentDidMount() {
    this.refs.modal.show();
    window.pixelateBegin();
  }

  goToDetailsPage() {
    window.open(WINTRGARDEN_REGISTRATION, '_blank');
    browserHistory.push('/');
  }

  componentWillUnmount() {
    this.props.actions.restartChallenge();
  }

  render() {
    return (
      <div className="row center win">
        <ScaleModal ref="modal" closeOnClick={false}>
          <div
            className="image col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
            <div className="zuhlke">
              <canvas id="canvas" width="200" height="200"></canvas>
            </div>
          </div>
          <div className="col-xs-12">
            <button className="btn btn-default talent btn-lg" onClick={this.goToDetailsPage.bind(this)}>
              <span>{winText}</span></button>
          </div>
        </ScaleModal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  return {}
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  return {
    actions: bindActionCreators(RestartAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Win);
