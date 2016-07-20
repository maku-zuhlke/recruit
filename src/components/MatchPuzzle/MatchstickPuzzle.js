/**
 * Created by lewa on 19/07/2016.
 */
import React, { Component } from 'react';
import Matchstick from "../Matchstick";
import MatchPlaceholder from "./MatchPlaceholder";
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';

class MatchstickPuzzle extends Component {
  constructor(props, context) {
    super(props, context)
  }

  renderNumberSkeleton() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 number">
        <div className="row horizontal">
          <MatchPlaceholder classes="top col-xs-10" match={<Matchstick name="1" />}/>
        </div>
        <div className="row vertical">
          <MatchPlaceholder classes="left col-xs-1 col-sm-3 col-md-2 col-lg-1" match={<Matchstick name="1"/>}/>
          <MatchPlaceholder classes="right col-xs-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2 col-lg-1 col-lg-offset-4" match={<Matchstick name="1"/>}/>
        </div>
        <div className="row horizontal">
          <MatchPlaceholder classes="middle col-xs-10" match={<Matchstick name="1"/>}/>
        </div>
        <div className="row vertical">
          <MatchPlaceholder classes="left col-xs-1 col-sm-3 col-md-2 col-lg-1" match={<Matchstick name="1"/>}/>
          <MatchPlaceholder classes="right col-xs-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2 col-lg-1 col-lg-offset-4" match={<Matchstick name="1"/>}/>
        </div>
        <div className="row horizontal">
          <MatchPlaceholder classes="bottom col-xs-10" match={<Matchstick name="1"/>}/>
        </div>
      </div>
    );
  }

  renderOperationSkeleton() {
    return(
      <div className="col-xs-1 col-sm-2 col-md-2 col-lg-2 operation">
        <div className="row horizontal">
          <MatchPlaceholder classes="top col-xs-10" match={<Matchstick name="1"/>}/>
          <MatchPlaceholder classes="middle col-xs-10" match={<Matchstick name="1"/>}/>
          <MatchPlaceholder classes="bottom col-xs-10" match={<Matchstick name="1"/>}/>
        </div>
        <div className="row verticalZindex">
          <MatchPlaceholder classes="plus col-xs-1 col-xs-offset-2 col-sm-1 col-sm-offset-2 col-md-1 col-md-offset-2 col-lg-1 col-lg-offset-2" match={<Matchstick name="2"/>}/>
        </div>
      </div>
    );
  }

  renderOperationEqualsSkeleton() {
    return(
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 operation">
        <div className="row horizontal">
          <div className="top col-xs-10"><img src="images/match_small_out.png"/></div>
          <div className="bottom col-xs-10"><img src="images/match_small_out.png"/></div>
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

export default DragDropContext(TouchBackend({ enableMouseEvents: true })) (MatchstickPuzzle)
