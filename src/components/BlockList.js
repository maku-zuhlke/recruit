/**
 * Created by lewa on 27/06/2016.
 */
import React, { Component } from 'react';
import SortableBlock from './SortableBlock';
import Instruction from './Instruction';
import Win from './Win';

class BlockList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { draggingIndex: null, blocks: props.blocks };
  }

  updateState(obj) {
    this.setState(obj);
  }

  submitOrder() {
    this.props.actions.verifyOrder();
    this.setState(this.state);
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
        <div className="col-xs-3"></div>
        <div className="col-xs-6 center space">
          {listItems}
          <button className="btn btn-default submit" onClick={this.submitOrder.bind(this)}>Submit</button>
        </div>
        <div className="col-xs-3"></div>
        {this.state.blocks.win && <Win />}
      </div>
    )
  }
}

export default BlockList
