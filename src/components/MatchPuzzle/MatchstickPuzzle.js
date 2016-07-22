/**
 * Created by lewa on 19/07/2016.
 */
import React, { Component } from 'react';
import Matchstick from "./Matchstick";
import MatchPlaceholder from "./MatchPlaceholder";
import MatchDragLayer from "./MatchDragLayer";
import Instruction from '../Instruction';
import Timer from '../Timer';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import $ from 'jquery';
import update from 'react/lib/update';

class MatchstickPuzzle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { matches: props.matches, timer: props.timer, end: false };
    this.timeIsUp = this.timeIsUp.bind(this);
  }

  timeIsUp(obj) {
    if (this.props.timer.timesup) {
      obj = $.extend({}, obj, { end: true });
      this.setState(obj);
    }
  }

  translate(list) {
    var renderedObj = [];
    var item = this.state.matches.numbers[list];
    for (var i = 0; i < item.length; i++) {
      if (item[i] == 1) {
        renderedObj.push({hidden: false, pos: [list, i]});
      } else {
        renderedObj.push({hidden: true});
      }
    }
    return renderedObj;
  }

  translateOp() {
    var renderedObj = [];
    var item = this.state.matches.operation;
    for (var i = 0; i < item.length; i++) {
      if (item[i] == 1) {
        renderedObj.push({hidden: false, pos: [8, i]});
      } else {
        renderedObj.push({hidden: true});
      }
    }
    return renderedObj;
  }

  handleDrop(match, place) {
    var operation = this.state.matches.operation.slice(0);
    var numbers = this.state.matches.numbers.slice(0, 3);
    if (match.pos[0] == 8) {
      operation[match.pos[1]] = 0;
    } else {
      numbers[match.pos[0]][match.pos[1]] = 0;
    }

    if (place[0] == 8) {
      operation[place[1]] = 1;
    } else {
      numbers[place[0]][place[1]] = 1;
    }
    this.setState( {
      matches: {
        numbers: numbers,
        operation: operation
      }
    });
  }

  renderNumberSkeleton(number) {
    var matchesObj = this.translate(number);
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 number">
        <div className="row horizontal">
          <MatchPlaceholder classes="top col-xs-10" match={matchesObj[1]} pos={[number, 1]} onDrop={this.handleDrop.bind(this)}/>
        </div><div className="row vertical">
          <MatchPlaceholder classes="left col-xs-1 col-sm-3 col-md-2 col-lg-1" match={matchesObj[0]} pos={[number, 0]} onDrop={this.handleDrop.bind(this)}/>
          <MatchPlaceholder classes="right col-xs-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2 col-lg-1 col-lg-offset-4" match={matchesObj[2]} pos={[number, 2]} onDrop={this.handleDrop.bind(this)}/>
        </div><div className="row horizontal">
          <MatchPlaceholder classes="middle col-xs-10" match={matchesObj[6]} pos={[number, 6]} onDrop={this.handleDrop.bind(this)}/>
        </div><div className="row vertical">
          <MatchPlaceholder classes="left col-xs-1 col-sm-3 col-md-2 col-lg-1" match={matchesObj[5]} pos={[number, 7]} onDrop={this.handleDrop.bind(this)}/>
          <MatchPlaceholder classes="right col-xs-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-2 col-lg-1 col-lg-offset-4" match={matchesObj[3]} pos={[number, 3]} onDrop={this.handleDrop.bind(this)}/>
        </div><div className="row horizontal">
          <MatchPlaceholder classes="bottom col-xs-10" match={matchesObj[4]} pos={[number, 4]} onDrop={this.handleDrop.bind(this)}/>
        </div>
      </div>
    );
  }

  renderOperationSkeleton() {
    var matchesObj = this.translateOp();
    return(
      <div className="col-xs-1 col-sm-2 col-md-2 col-lg-2 operation">
        <div className="row horizontal">
          <MatchPlaceholder classes="top col-xs-10" match={matchesObj[0]} pos={[8, 0]} onDrop={this.handleDrop.bind(this)}/>
          <MatchPlaceholder classes="middle col-xs-10" match={matchesObj[1]} pos={[8, 1]} onDrop={this.handleDrop.bind(this)}/>
        </div>
        <div className="row verticalZindex">
          <MatchPlaceholder classes="plus col-xs-1 col-xs-offset-2 col-sm-1 col-sm-offset-2 col-md-1 col-md-offset-2 col-lg-1 col-lg-offset-2" match={matchesObj[2]} pos={[8, 2]} onDrop={this.handleDrop.bind(this)}/>
        </div>
      </div>
    );
  }

  renderOperationEqualsSkeleton() {
    return(
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 operation">
        <div className="row horizontal">
          <div className="top col-xs-10"><div className="match"><img src="images/match_out.png"/></div></div>
          <div className="bottom col-xs-10"><div className="match"><img src="images/match_out.png"/></div></div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="center">
        <Instruction instruction="Solve the equation moving one matchstick"/>
        <div className="puzzle col-xs-12 col-sm-11 col-sm-offset-1 col-md-11 col-md-offset-1 col-lg-11 col-lg-offset-1">
          {this.renderNumberSkeleton(0)}
          {this.renderOperationSkeleton()}
          {this.renderNumberSkeleton(1)}
          {this.renderOperationEqualsSkeleton()}
          {this.renderNumberSkeleton(2)}
          <MatchDragLayer key="__preview" name="Match" />
        </div>
        <div className="extras">
          <div className="col-xs-3 col-xs-offset-1 col-lg-3 col-lg-offset-1">

          </div>
          <div className="col-xs-3 col-xs-offset-3 col-lg-3 col-lg-offset-3">
            <button className="btn btn-default submit" onClick={this.submitOrder}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true })) (MatchstickPuzzle)
