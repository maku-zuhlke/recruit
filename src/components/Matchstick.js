/**
 * Created by lewa on 19/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const matchSource = {
  beginDrag(props) {
    console.log('@@@@@@@@@@@@@@@@@@@@', props)
    return {
      name: props.name
    }
  }
};

class Matchstick extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isDropped: PropTypes.bool
  };

  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    return connectDragSource(<div className="match">
      <img src="images/match_out.png"/>
    </div>);
  }
}

export default DragSource(ItemTypes.MATCH, matchSource, (connect, monitor) => ({ connectDragSource: connect.dragSource(), isDragging: monitor.isDragging()})) (Matchstick);
