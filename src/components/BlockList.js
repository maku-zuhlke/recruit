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
    this.state = { draggingIndex: null, blocks: props.blocks, attempt: false, timer: props.timer };
  }

  updateState(obj) {
    obj = $.extend({}, obj, { attempt: false });
    this.setState(obj);
  }

  submitOrder() {
    this.props.actions.verifyOrder();
    this.setState({ attempt: true });
  }

  checkTime() {
    return this.state.timer.seconds == '00';
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
          <button className="btn btn-default submit" onClick={this.submitOrder.bind(this)}>Submit</button>
        </div>
        {(!this.state.blocks.win && this.state.attempt) && <WrongAnswer />}
        {(this.state.blocks.win || this.checkTime()) && <Win />}
      </div>
    )
  }
}

export default BlockList
