/**
 * Created by lewa on 19/07/2016.
 */
import React, { Component, PropTypes } from 'react';

class MatchstickPuzzle extends Component {

  constructor(props, context) {
    super(props, context)
  }

  renderNumberSkeleton() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 number">
        <div className="row horizontal">
          <div className="top col-xs-10"></div>
        </div>
        <div className="row vertical">
          <div className="left col-xs-1 col-sm-3 col-md-2 col-lg-1"></div>
          <div className="right col-xs-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2 col-lg-1 col-lg-offset-4"></div>
        </div>
        <div className="row horizontal">
          <div className="middle col-xs-10"></div>
        </div>
        <div className="row vertical">
          <div className="left col-xs-1 col-sm-3 col-md-2 col-lg-1"></div>
          <div className="right col-xs-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2 col-lg-1 col-lg-offset-4"></div>
        </div>
        <div className="row horizontal">
          <div className="bottom col-xs-10"></div>
        </div>
      </div>
    );
  }

  renderOperationSkeleton() {
    return(
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 operation">

        <div className="row horizontal">
          <div className="top col-xs-10"></div>
          <div className="middle col-xs-10"></div>
          <div className="bottom col-xs-10"></div>
        </div>
        <div className="row verticalZindex">
          <div className="plus col-xs-1 col-xs-offset-4 col-sm-1 col-sm-offset-4 col-md-1 col-md-offset-4 col-lg-1 col-lg-offset-4"></div>
        </div>
      </div>
    );
  }

  renderOperationEqualsSkeleton() {
    return(
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 operation">

        <div className="row horizontal">
          <div className="top col-xs-10"></div>
          <div className="bottom col-xs-10"></div>
        </div>
      </div>
    );
  }

  render() {
    return (
        <div className="puzzle col-xs-12 col-sm-11 col-sm-offset-1 col-md-11 col-md-offset-1 col-lg-11 col-lg-offset-1">
          {this.renderNumberSkeleton()}
          {this.renderOperationSkeleton()}
          {this.renderNumberSkeleton()}
          {this.renderOperationEqualsSkeleton()}
          {this.renderNumberSkeleton()}
        </div>
    );
  }
}

export default MatchstickPuzzle
