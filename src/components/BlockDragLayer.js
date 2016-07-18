/**
 * Created by lewa on 15/07/2016.
 */
'use strict';
import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

function collect(monitor) {
  var item = monitor.getItem();
  return {
    index: item && item.index,
    block: item && item.block,
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }
  var x = currentOffset.x;
  var y = currentOffset.y;
  var transform = `translate(${x}px, ${y}px)`;

  return {
    pointerEvents: 'none',
    transform: transform,
    WebkitTransform: transform
  };
}

class BlockDragLayer extends Component {
  static propTypes = {
    index: React.PropTypes.number,
    block: React.PropTypes.object,
    currentOffset: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number
    }),
    isDragging: React.PropTypes.bool
  };

  render() {
    return (
      <div style={getItemStyles(this.props.currentOffset)}>
        {this.props.index} {this.props.blocks}
      </div>
    );
  }
}

export default DragLayer(collect) (BlockDragLayer);
