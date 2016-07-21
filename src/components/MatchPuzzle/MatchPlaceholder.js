/**
 * Created by lewa on 20/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../ItemTypes';

const matchTarget = {
  drop(props, monitor) {
    if (!props.match) {
      props.match = monitor.getItem();
      props.onDrop(monitor.getItem());
    }
  }
};

class MatchPlaceholder extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onDrop: PropTypes.func,
    classes: PropTypes.string.isRequired,
    match: PropTypes.element
  };

  render() {
    const { isOver, connectDropTarget, classes, match } = this.props;
    return connectDropTarget(<div className={classes}>
      {match}
    </div>);
  }
}

export default DropTarget(ItemTypes.MATCH, matchTarget, (connect, monitor) => ({ connectDropTarget: connect.dropTarget(), isOver: monitor.isOver() })) (MatchPlaceholder);
