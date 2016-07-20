/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import Block from './Block';
import Instruction from '../Instruction';
import Win from '../Win';
import WrongAnswer from '../WrongAnswer';
import $ from 'jquery';
import Timer from '../Timer';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { default as BlockDragLayer } from './BlockDragLayer';

class BlockList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { blocks: props.blocks, attempt: false, timer: props.timer, end: false };
    this.moveBlock = this.moveBlock.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.timeIsUp = this.timeIsUp.bind(this);
  }

  submitOrder() {
    this.props.actions.verifyOrder();
    this.setState({ attempt: true });
  }

  timeIsUp(obj) {
    if (this.props.timer.timesup) {
      obj = $.extend({}, obj, { end: true });
      this.setState(obj);
    }
  }

  moveBlock(dragIndex, hoverIndex) {
    this.props.actions.sort(dragIndex, hoverIndex);
    this.setState({ attempt: false });
  }

  render() {
    var listItems = this.state.blocks.blocks.map(function(block, i) {
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
        <Instruction instruction={this.state.blocks.instruction}/>
        <div className="center">
          <div> {listItems} <BlockDragLayer key="__preview" name="Block" /> </div>
          <div className="col-xs-3 col-xs-offset-1 col-lg-3 col-lg-offset-1">
            <Timer
              timer={this.state.timer}
              actions={this.props.timerActions}
              callback={this.timeIsUp}
            />
          </div>
          <div className="col-xs-3 col-xs-offset-3 col-lg-3 col-lg-offset-3"><button className="btn btn-default submit" onClick={this.submitOrder}>Submit</button></div>
        </div>
        {(!this.state.blocks.win && this.state.attempt) && <WrongAnswer />}
        {(this.state.blocks.win || this.state.end) && <Win />}
      </div>
    )
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true })) (BlockList);