/**
 * Created by lewa on 15/07/2016.
 */
'use strict';
import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

function collect(monitor) {
  var item = monitor.getItem();
  return {
    id: item && item.id,
    name: item && item.name,
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
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    currentOffset: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number
    }),
    isDragging: React.PropTypes.bool
  };

  render() {
    return (
      <div className="item preview"
        style={getItemStyles(this.props.currentOffset)}>
        {this.props.id} {this.props.name}
      </div>
    );
  }
}

export default DragLayer(collect) (BlockDragLayer);
