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

  it('should handle CHECK - decreasing number of moves', () => {
    expect(initialState.moves).toEqual(1);
    expect(reducer(initialState, {type: types.CHECK}).moves).toEqual(0);
  });

  it('should handle CHECK - win', () => {
    expect(initialState.win).toEqual(false);
    const before = [2, 1];
    reducer(initialState, {type: types.REMOVE_MATCH, before});
    const after = [3, 1];
    reducer(initialState, {type: types.PLACE_MATCH, after});
    expect(reducer(initialState, {type: types.CHECK}).win).toEqual(true);
  });

  it('should handle CHECK - moves != 0', () => {
    expect(initialState.win).toEqual(false);
    const before = [2, 1];
    reducer(initialState, {type: types.REMOVE_MATCH, before});
    const after = [3, 1];
    reducer(initialState, {type: types.PLACE_MATCH, after});
    initialState.moves = 2;
    expect(reducer(initialState, {type: types.CHECK}).win).toEqual(false);
  });

  it('should handle REMOVE_MATCH - removing from number', () => {
    const before = [1, 2];
    expect(reducer(initialState, {type: types.REMOVE_MATCH, before}).numbers[before[0]]).toEqual([0,0,0,1,0,0,0]);
  });

  it('should handle REMOVE_MATCH - removing from operation', () => {
    const before = [3, 0];
    expect(reducer(initialState, {type: types.REMOVE_MATCH, before}).operation).toEqual([0,0,0]);
  });

  it('should handle PLACE_MATCH - placing in number', () => {
    const after = [1, 6];
    expect(reducer(initialState, {type: types.PLACE_MATCH, after}).numbers[after[0]]).toEqual([0,0,1,1,0,0,1]);
  });

  it('should handle PLACE_MATCH - placing in operation', () => {
    const after = [3, 2];
    expect(reducer(initialState, {type: types.PLACE_MATCH, after}).operation).toEqual([1,0,1]);
  });
});
