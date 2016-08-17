/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import Block from './Block';
import Instruction from '../Instruction';
import Timer from '../Timer';
import Win from '../Win';
import Fail from '../Fail';
import WrongAnswer from '../WrongAnswer';
import { default as BlockDragLayer } from './BlockDragLayer';
import { timesUpText, doneButton } from '../../data/strings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BlockActions from '../../actions/indexBlock';

export class BlockList extends Component {
  constructor(props, context) {
    super(props, context);
    this.moveBlock = this.moveBlock.bind(this);
    this.timeIsUp = this.timeIsUp.bind(this);
  }

  done() {
    this.props.actions.checkSolution();
  }

  timeIsUp() {
    this.props.actions.timeIsUp();
  }

  moveBlock(dragIndex, hoverIndex) {
    this.props.actions.moveCodeBlock(dragIndex, hoverIndex);
  }

  render() {
    var listItems = this.props.blocks.blocks.map((block, i) => {
      return (
       <Block
          key={block.id}
          index={i}
          moveBlock={this.moveBlock}
          block={block}/>
      );
    }, this);
    return (
      <div>
        <div className="contentRow row">
          <div className="content col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 center">
            <div className="challenge">
              <Instruction instruction={this.props.blocks.instruction}/>
              <div className="center">
                <div> {listItems} <BlockDragLayer key="__preview" name="Block" /> </div>
                <div className="col-xs-3 col-xs-offset-1 col-lg-3 col-lg-offset-1">
                  <Timer callback={this.timeIsUp} />
                </div>
                <div className="col-xs-3 col-xs-offset-3 col-lg-3 col-lg-offset-3">
                  <button className="btn btn-default done" onClick={this.done.bind(this)}>{doneButton}</button>
                </div>
              </div>
              {(!this.props.blocks.win && this.props.blocks.attempt) && <WrongAnswer />}
              {this.props.blocks.win && <Win />}
              {(this.props.blocks.end && !this.props.blocks.win) && <Fail text={timesUpText}/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  return {
    blocks: {
      ...state.blocks,
      win: state.blocks.numberOfItemsInWrongPosition === 0
    }
  };
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  return {
    actions: bindActionCreators(BlockActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (BlockList);
