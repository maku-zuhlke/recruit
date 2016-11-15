/**
 * Created by lewa on 20/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../ItemTypes';
import Matchstick from "./Matchstick";

const matchTarget = {
  drop(props, monitor) {
    if (props.match.hidden) {
      props.onDrop(monitor.getItem(), props.pos);
    }
  }
};

class MatchPlaceholder extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onDrop: PropTypes.func,
    classes: PropTypes.string.isRequired,
    match: PropTypes.object,
    pos: PropTypes.array.isRequired
  };

  render() {
    const { isOver, connectDropTarget, classes, match, pos } = this.props;
    let border = (isOver && match.hidden) ? '2px dashed gray' : 'none';

    var result = <img src="images/match_out.png" className="placeholder"/>;
    if (!match.hidden) {
      result = <Matchstick pos={match.pos} type={ItemTypes.MATCH}/>;
    }
    return connectDropTarget(<div className={classes} id={pos[0] + pos[1]}>
      <div className="match" style={{ border }}>{result}</div></div>);
  }
}

export default DropTarget(ItemTypes.MATCH, matchTarget, (connect, monitor) => ({ connectDropTarget: connect.dropTarget(), isOver: monitor.isOver() })) (MatchPlaceholder);
