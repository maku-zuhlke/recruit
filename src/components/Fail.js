/**
 * Created by lewa on 22/07/2016.
 */
import React, { Component } from 'react';
import { ScaleModal } from 'boron';
import { bindActionCreators } from 'redux';
import * as RestartAction from '../actions/restart';
import { connect } from 'react-redux';
// import {browserHistory} from 'react-router';
import { yesText, noText} from '../data/strings';
import {WINTRGARDEN_REGISTRATION} from "../data/externalLinks";

export class Fail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showModal: false }
  }

  componentDidMount() {
    this.refs.modal.show();
  }

  restartTheChallenge(){
    this.props.actions.restartChallenge();
    this.props.callback();
  }

  goToDetailsPage(){
    // browserHistory.push('/details');
    window.location = WINTRGARDEN_REGISTRATION;
  }

  render() {

    return (
      <div className="row center failModal">
        <ScaleModal ref="modal" closeOnClick={false}>
        <div className="fail col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <h1>{ this.props.text }</h1>

          <p>
            <button  className = "btn btn-default start btn-lg" onClick={this.restartTheChallenge.bind(this)}>
              {yesText}
            </button>

            <button className = "btn btn-default start btn-lg" onClick={this.goToDetailsPage.bind(this)}>
              {noText}
            </button>
          </p>
        </div>
      </ScaleModal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  return {

  }
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  return {
    actions: bindActionCreators(RestartAction, dispatch)
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Fail);

// export default Fail;
