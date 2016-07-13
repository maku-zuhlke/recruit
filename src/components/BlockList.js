/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import Block from './Block';
import Instruction from './Instruction';
import Win from './Win';
import WrongAnswer from './WrongAnswer';
import $ from 'jquery';
import Timer from './Timer';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';

class BlockList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { blocks: props.blocks, attempt: false, timer: props.timer, end: false };
    this.moveCard = this.moveCard.bind(this)
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

  moveCard(dragIndex, hoverIndex) {
    this.props.actions.sort(dragIndex, hoverIndex);
    this.setState({ attempt: false });
  }

  render() {
    var listItems = this.state.blocks.blocks.map(function(block, i) {
      return (
        <Block
          key={block.id}
          index={i}
          moveCard={this.moveCard}
          block={block}/>
      );
    }, this);

    return (
      <div>
        <Instruction instruction={this.state.blocks.instruction}/>
        <div className="center">
          {listItems}
          <div className="col-xs-3 col-xs-offset-1 col-lg-3 col-lg-offset-1">
            <Timer
              timer={this.state.timer}
              actions={this.props.timerActions}
              callback={this.timeIsUp.bind(this)}
            />
          </div>
          <div className="col-xs-3 col-xs-offset-3 col-lg-3 col-lg-offset-3"><button className="btn btn-default submit" onClick={this.submitOrder.bind(this)}>Submit</button></div>
        </div>
        {(!this.state.blocks.win && this.state.attempt) && <WrongAnswer />}
        {(this.state.blocks.win || this.state.end) && <Win />}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend) (BlockList);
