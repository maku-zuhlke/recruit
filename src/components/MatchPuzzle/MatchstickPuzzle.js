/**
 * Created by lewa on 19/07/2016.
 */
import React, { Component } from 'react';
import MatchPlaceholder from "./MatchPlaceholder";
import MatchDragLayer from "./MatchDragLayer";
import Instruction from '../Instruction';
import Timer from '../Timer';
import Fail from '../Fail';
import Win from '../Win';
import { timesUpText, outOfMovesText, matchPuzzleInstruction } from '../../data/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MatchesActions from '../../actions/indexMatches';

export class MatchstickPuzzle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { matches: props.matches, timer: props.timer, end: false };
    this.timeIsUp = this.timeIsUp.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }



  timeIsUp() {
    this.props.actions.timeIsUp();
  }

  mapNumber(list) {
    var mappedNumber = [];
    var number = this.props.matches.numbers[list];
    for (var i = 0; i < number.length; i++) {
      if (number[i] == 1) {
        mappedNumber.push({hidden: false, pos: [list, i]});
      } else {
        mappedNumber.push({hidden: true});
      }
    }
    return mappedNumber;
  }

  mapOperation() {
    var mappedOperation = [];
    var operation = this.props.matches.operation;
    for (var i = 0; i < operation.length; i++) {
      if (operation[i] == 1) {
        mappedOperation.push({hidden: false, pos: [3, i]});
      } else {
        mappedOperation.push({hidden: true});
      }
    }
    return mappedOperation;
  }

  handleDrop(match, place) {
    this.props.actions.removeMatch(match.pos);
    this.props.actions.placeMatch(place);
    this.props.actions.checkMatchesPositions();
  }

  resolveInstruction() {
    var m = " matches";
    if (this.props.matches.moves === 1) {
      m = " match";
    }
    return matchPuzzleInstruction + this.props.matches.moves + m;
  }

  renderNumberSkeleton(number) {
    var matchesObj = this.mapNumber(number);
    return (
      <div className="number">
        <div className="row horizontal">
          <MatchPlaceholder classes="top col-xs-10 col-xs-offset-1" match={matchesObj[1]} pos={[number, 1]} onDrop={this.handleDrop}/>
        </div><div className="row vertical">
          <MatchPlaceholder classes="left col-xs-1 col-sm-3 col-md-2 col-lg-1" match={matchesObj[0]} pos={[number, 0]} onDrop={this.handleDrop}/>
          <MatchPlaceholder classes="right col-xs-1 col-xs-offset-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-3 col-lg-1 col-lg-offset-4" match={matchesObj[2]} pos={[number, 2]} onDrop={this.handleDrop}/>
        </div><div className="row horizontal">
          <MatchPlaceholder classes="middle col-xs-10" match={matchesObj[6]} pos={[number, 6]} onDrop={this.handleDrop}/>
        </div><div className="row vertical">
          <MatchPlaceholder classes="left col-xs-1 col-sm-3 col-md-2 col-lg-1" match={matchesObj[5]} pos={[number, 5]} onDrop={this.handleDrop}/>
          <MatchPlaceholder classes="right col-xs-1 col-xs-offset-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-3 col-lg-1 col-lg-offset-4" match={matchesObj[3]} pos={[number, 3]} onDrop={this.handleDrop}/>
        </div><div className="row horizontal">
          <MatchPlaceholder classes="bottom col-xs-10" match={matchesObj[4]} pos={[number, 4]} onDrop={this.handleDrop}/>
        </div>
      </div>
    );
  }

  renderOperationSkeleton() {
    var matchesObj = this.mapOperation();
    return(
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 operation">
        <div className="row horizontal">
          <MatchPlaceholder classes="top col-xs-10" match={matchesObj[0]} pos={[3, 0]} onDrop={this.handleDrop}/>
          <MatchPlaceholder classes="middle col-xs-10" match={matchesObj[1]} pos={[3, 1]} onDrop={this.handleDrop}/>
        </div>
        <div className="row verticalZindex">
          <MatchPlaceholder classes="plus col-xs-1 col-sm-1 col-md-1 col-lg-1" match={matchesObj[2]} pos={[3, 2]} onDrop={this.handleDrop}/>
        </div>
      </div>
    );
  }

  renderOperationEqualsSkeleton() {
    return(
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 operation">
        <div className="row horizontal">
          <div className="top col-xs-10"><div className="match equalSign"><img src="images/match_equal.png"/></div></div>
          <div className="bottom col-xs-10"><div className="match equalSign"><img src="images/match_equal.png"/></div></div>
        </div>
      </div>
    );
  }

  render() {

    return (
      <div className="puzzleRow row">
        <div className="contentPuzzle col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
          <div className="center challenge">
            <Instruction instruction={this.resolveInstruction()}/>
            <div className="puzzle col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
              <div className="col-xs-3 col-xs-offset-1 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1 col-lg-3 col-lg-offset-1 numberCol">{this.renderNumberSkeleton(0)}</div>
              {this.renderOperationSkeleton()}
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 numberCol">{this.renderNumberSkeleton(1)}</div>
              {this.renderOperationEqualsSkeleton()}
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 numberCol">{this.renderNumberSkeleton(2)}</div>
              <MatchDragLayer key="__previewPuzzle" name="Match" />
            </div>
            <div className="extras" key={this.props.matches.uniqueID}>
              <div className="col-xs-3 col-xs-offset-1 col-lg-3 col-lg-offset-1">
                <Timer
                  callback={this.timeIsUp}
                />
              </div>
            </div>
            {this.props.matches.win && <Win />}
            {((this.props.matches.end || this.props.matches.moves <= 0) && !this.props.matches.win) && <Fail text={this.props.matches.end ? timesUpText : outOfMovesText} />}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */

  return {
    matches: {
      ...state.matches,
      win: state.matches.correctOperation && state.matches.correctNumbers && state.matches.moves === 0
    },
  };
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  return {
    actions: bindActionCreators(MatchesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MatchstickPuzzle);
