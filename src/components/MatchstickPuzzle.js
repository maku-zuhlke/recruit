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
          <div className="left col-xs-4 col-sm-3 col-md-2 col-lg-1"></div>
          <div className="right col-xs-4 col-xs-offset-2  col-sm-3  col-sm-offset-4 col-md-2 col-md-offset-6 col-lg-1 col-lg-offset-7"></div>
        </div>
        <div className="row horizontal">
          <div className="middle col-xs-10"></div>
        </div>
        <div className="row vertical">
          <div className="left col-xs-4 col-sm-3 col-md-2 col-lg-1"></div>
          <div className="right col-xs-4 col-xs-offset-2  col-sm-3  col-sm-offset-4 col-md-2 col-md-offset-6 col-lg-1 col-lg-offset-7"></div>
        </div>
        <div className="row horizontal">
          <div className="bottom col-xs-10"></div>
        </div>
      </div>
    );
  }

  renderOperationSkeleton() {
    return(
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 number">
        
      </div>
    );
  }

  render() {
    return (<div className="puzzle">{this.renderNumberSkeleton()}</div>);
  }
}

export default MatchstickPuzzle
