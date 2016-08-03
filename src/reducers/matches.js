/**
 * Created by lewa on 21/07/2016.
 */
import { CHECK_MATCHES_POSITIONS, REMOVE_MATCH, PLACE_MATCH } from '../actions/const';
import { randomChallenge } from '../utils/randomChallenge';
import * as problems from '../data/matchstickProblems';

export default function matches(state = randomChallenge(problems), action) {
  switch (action.type) {
    case CHECK_MATCHES_POSITIONS:
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

    case REMOVE_MATCH:
      if (action.before[0] == 3) {
        state.operation[action.before[1]] = 0;
      } else {
        state.numbers[action.before[0]][action.before[1]] = 0;
      }
      return state;

    case PLACE_MATCH:
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
