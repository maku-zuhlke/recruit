/**
 * Created by lewa on 27/06/2016.
 */
import { VERIFY_CODE_ORDER, REPOSITION_CODE_BLOCKS } from '../actions/const';
import { randomChallenge } from '../utils/randomChallenge';
import * as problems from '../data/scratchyProblems';
import update from 'react/lib/update';

export default function blocks(state = randomChallenge(problems), action) {
  switch (action.type) {
    case VERIFY_CODE_ORDER:
      state.win = state.blocks.map((item, i) => {
        return item.id === state.correctOrder[i];
      }).reduce((current, next) => {
        return current && next;
      });
      return state;
    case REPOSITION_CODE_BLOCKS:
      const dragBlock = state.blocks[action.dragIndex];
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
