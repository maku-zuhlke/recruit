/**
 * Created by lewa on 19/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../ItemTypes';

const matchSource = {
  beginDrag(props) {
    return {
      pos: props.pos
    }
  }
};

class Matchstick extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    pos: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const cursor = 'move';
    return connectDragSource(
      <img style={{ cursor, opacity }} src="images/match_out.png" draggable="true"/>
    );
  }
}

export default DragSource(ItemTypes.MATCH, matchSource, (connect, monitor) => ({ connectDragSource: connect.dragSource(), isDragging: monitor.isDragging()})) (Matchstick);
