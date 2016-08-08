/**
 * Created by lewa on 25/07/2016.
 */
'use strict';
import expect from 'expect';
import reducer from '../../src/reducers/matches';
import * as types from 'actions/const';

describe('matchesReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      numbers :[[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,1,1,1,0,0,0]],
      operation: [1,0,0],
      moves: 1,
      correctPositions: {numbers: [[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]], operation:[1,1,0]},
      win: false
    };
  });

  it('should return defined state', () => {
    expect(reducer(undefined, {})).toExist();
  });

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle MATCHES_CHECK_POSITIONS - decreasing number of moves', () => {
    expect(initialState.moves).toEqual(1);
    expect(reducer(initialState, {type: types.MATCHES_CHECK_POSITIONS}).moves).toEqual(0);
  });

  it('should handle MATCHES_CHECK_POSITIONS - correct positions', () => {
    expect(initialState.correctNumbers).toBe(undefined);
    expect(initialState.correctOperation).toBe(undefined);
    expect(initialState.moves).toEqual(1);
    const before = [2, 1];
    reducer(initialState, {type: types.MATCHES_REMOVE_MATCH, before});
    const after = [3, 1];
    reducer(initialState, {type: types.MATCHES_PLACE_MATCH, after});
    var newState = reducer(initialState, {type: types.MATCHES_CHECK_POSITIONS});
    expect(newState.correctNumbers).toBe(true);
    expect(newState.correctOperation).toBe(true);
    expect(newState.moves).toEqual(0);
  });

  it('should handle MATCHES_CHECK_POSITIONS - correct operation', () => {
    expect(initialState.correctNumbers).toBe(undefined);
    expect(initialState.correctOperation).toBe(undefined);
    expect(initialState.moves).toEqual(1);
    const before = [0, 2];
    reducer(initialState, {type: types.MATCHES_REMOVE_MATCH, before});
    const after = [3, 1];
    reducer(initialState, {type: types.MATCHES_PLACE_MATCH, after});
    var newState = reducer(initialState, {type: types.MATCHES_CHECK_POSITIONS});
    expect(newState.correctNumbers).toBe(false);
    expect(newState.correctOperation).toBe(true);
    expect(newState.moves).toEqual(0);
  });

  it('should handle MATCHES_CHECK_POSITIONS - correct numbers', () => {
    expect(initialState.correctNumbers).toBe(undefined);
    expect(initialState.correctOperation).toBe(undefined);
    expect(initialState.moves).toEqual(1);
    const before = [2, 1];
    reducer(initialState, {type: types.MATCHES_REMOVE_MATCH, before});
    const after = [3, 2];
    reducer(initialState, {type: types.MATCHES_PLACE_MATCH, after});
    var newState = reducer(initialState, {type: types.MATCHES_CHECK_POSITIONS});
    expect(newState.correctNumbers).toBe(true);
    expect(newState.correctOperation).toBe(false);
    expect(newState.moves).toEqual(0);
  });

  it('should handle MATCHES_CHECK_POSITIONS - moves != 0', () => {
    initialState.moves = 2;
    expect(initialState.correctNumbers).toBe(undefined);
    expect(initialState.correctOperation).toBe(undefined);
    expect(initialState.moves).toEqual(2);
    const before = [2, 1];
    reducer(initialState, {type: types.MATCHES_REMOVE_MATCH, before});
    const after = [3, 1];
    reducer(initialState, {type: types.MATCHES_PLACE_MATCH, after});
    var newState = reducer(initialState, {type: types.MATCHES_CHECK_POSITIONS});
    expect(newState.correctNumbers).toBe(true);
    expect(newState.correctOperation).toBe(true);
    expect(newState.moves).toEqual(1);
  });

  it('should handle MATCHES_REMOVE_MATCH - removing from number', () => {
    const before = [1, 2];
    expect(reducer(initialState, {type: types.MATCHES_REMOVE_MATCH, before}).numbers[before[0]]).toEqual([0,0,0,1,0,0,0]);
  });

  it('should handle MATCHES_REMOVE_MATCH - removing from operation', () => {
    const before = [3, 0];
    expect(reducer(initialState, {type: types.MATCHES_REMOVE_MATCH, before}).operation).toEqual([0,0,0]);
  });

  it('should handle MATCHES_PLACE_MATCH - placing in number', () => {
    const after = [1, 6];
    expect(reducer(initialState, {type: types.MATCHES_PLACE_MATCH, after}).numbers[after[0]]).toEqual([0,0,1,1,0,0,1]);
  });

  it('should handle MATCHES_PLACE_MATCH - placing in operation', () => {
    const after = [3, 2];
    expect(reducer(initialState, {type: types.MATCHES_PLACE_MATCH, after}).operation).toEqual([1,0,1]);
  });

  it('should handle MATCHES_TIMES_UP - change end attribute', () => {
    expect(initialState.end).toBe(undefined);
    var newState = reducer(initialState, {type: types.MATCHES_TIMES_UP});
    expect(newState.end).toBe(true);
  });
});
