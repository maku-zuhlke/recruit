/**
 * Created by lewa on 21/07/2016.
 */
import { CHECK, REMOVE, PLACE } from '../actions/const';

const initialState = {
  numbers :[[1,1,0,1,1,0,1],[0,1,1,0,1,1,1],[1,1,1,1,1,1,1]],
  operation: [1,0,0],
  moves: 2,
  correctPositions: {numbers: [[1,1,1,1,1,0,1],[0,1,1,1,1,0,1],[1,1,0,1,1,1,1]], operation: [1,0,0]},
  win: false
};

export default function matches(state = initialState, action) {
  switch (action.type) {
    case CHECK:
      state.moves = state.moves - 1;
      var correctNumbers = state.numbers.map((item, i) => {
        var subResult = item.map((num, ind) => {
          return (num === state.correctPositions.numbers[i][ind]);
        }).reduce((current, next) => {
          return current && next;
        });
        return subResult;

      }).reduce((current, next) => {
        return current && next;
      });
      var correctOperation = state.operation.map((item, i) => {
        return (item === state.correctPositions.operation[i]);
      }).reduce((current, next) => {
        return current && next;
      });
      state.win = correctNumbers && correctOperation && state.moves == 0;
      return state;

    case REMOVE:
      if (action.before[0] == 3) {
        state.operation[action.before[1]] = 0;
      } else {
        state.numbers[action.before[0]][action.before[1]] = 0;
      }
      return state;

    case PLACE:
      if (action.after[0] == 3) {
        state.operation[action.after[1]] = 1;
      } else {
        state.numbers[action.after[0]][action.after[1]] = 1;
      }
      return state;

    default:
      return state;
  }
}
