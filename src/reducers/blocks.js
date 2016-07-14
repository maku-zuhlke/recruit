/**
 * Created by lewa on 27/06/2016.
 */
import { VERIFY, SORT } from '../actions/const';
import * as problems from '../data/scratchyProblems';
import update from 'react/lib/update';

export default function blocks(state = problems.a, action) {
  switch (action.type) {
    case VERIFY:
      var blocksAreOrdered = state.blocks.map((item, i) => {
        return item.id === state.correctOrder[i];
      }).reduce((current, next) => {
        return current && next;
      });
      state.win = blocksAreOrdered;
      return state;
    case SORT:
      const blocks = state.blocks;
      const dragBlock = blocks[action.dragIndex];
      state.blocks = update(state.blocks, {
        $splice: [
          [action.dragIndex, 1],
          [action.hoverIndex, 0, dragBlock]
        ]
      });
      return state;
    default:
      return state;
  }
}
