/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import SortableBlock from './SortableBlock';
import Instruction from './Instruction';
import Win from './Win';
import WrongAnswer from './WrongAnswer';
import $ from 'jquery';
import Timer from './Timer';

class BlockList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { draggingIndex: null, blocks: props.blocks, attempt: false, timer: props.timer, end: false};
  }

  updateState(obj) {
    obj = $.extend({}, obj, { attempt: false });
    this.setState(obj);
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

  render() {
    var listItems = this.state.blocks.blocks.map(function(item, i) {
      return (
        <SortableBlock
          key={i}
          updateState={this.updateState.bind(this)}
          items={this.state.blocks.blocks}
          draggingIndex={this.state.draggingIndex}
          sortId={i}
          outline="list"
          item={item}/>
      );
    }, this);

    return (
      <div>
        <Instruction instruction={this.state.blocks.instruction}/>
        <div className="col-lg-10 col-lg-offset-1 center">
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

export default BlockList
