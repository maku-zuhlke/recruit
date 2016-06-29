/**
 * Created by lewa on 27/06/2016.
 */
import { VERIFY } from '../actions/const';
import * as problems from '../data/scratchyProblems';

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

    default:
      return state
  }
}
//conflict mergetool -t kdiff3
