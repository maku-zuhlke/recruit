/**
 * Created by lewa on 21/07/2016.
 */
import { MATCHES_CHECK_POSITIONS, MATCHES_REMOVE_MATCH, MATCHES_PLACE_MATCH, MATCHES_TIMES_UP } from '../actions/const';
import { randomChallenge } from '../utils/randomChallenge';
import * as problems from '../data/matchstickProblems';

export default function matches(state = randomChallenge(problems), action) {
  switch (action.type) {
    case MATCHES_CHECK_POSITIONS:
      return withCheckedPositions(state);

    case MATCHES_REMOVE_MATCH:
      return withoutRemovedMatch(state, action.payload.before);

    case MATCHES_PLACE_MATCH:
      return withPlacedMatch(state, action.payload.after);

    case MATCHES_TIMES_UP:
      return withTimesUp(state);

    default:
      return state;
  }
}

const withTimesUp = (state) => {
  return  {
    ...state,
    end: true
  }
};

const OPERATION = 3;
const withoutRemovedMatch = (state, matchPosition) => {
  if (matchPosition[0] === OPERATION) {
    var operation = state.operation;
    operation[matchPosition[1]] = 0;
    return {
      ...state,
      operation: operation
    }
  } else {
    var numbers = state.numbers;
    numbers[matchPosition[0]][matchPosition[1]] = 0;
    return {
      ...state,
      numbers: numbers
    }
  }
};

const withPlacedMatch = (state, matchPosition) => {
  if (matchPosition[0] === OPERATION) {
    var operation = state.operation;
    operation[matchPosition[1]] = 1;
    return {
      ...state,
      operation: operation
    }
  } else {
    var numbers = state.numbers;
    numbers[matchPosition[0]][matchPosition[1]] = 1;
    return {
      ...state,
      numbers: numbers
    }
  }
};

const isMatchInCorrectPosition = (match, correctPosition) => match === correctPosition;

const isNumberCorrect = (number, correctNumber) => {
  return !(number.filter((item, i) => {
    return !isMatchInCorrectPosition(item, correctNumber[i]);
  })).length;
};

const isOperationCorrect = (operation, correctOperation) => {
  return !(operation.filter((item, i) => {
    return !isMatchInCorrectPosition(item, correctOperation[i]);
  })).length;
};

const withCheckedPositions = (state) => {
  return {
    ...state,
    moves: state.moves - 1,
    correctOperation: isOperationCorrect(state.operation, state.correctPositions.operation),
    correctNumbers: state.numbers.map((number, ind) => {
      return isNumberCorrect(number, state.correctPositions.numbers[ind]);
    }).reduce((current, next) => {
      return current && next;
    })
  }
};
