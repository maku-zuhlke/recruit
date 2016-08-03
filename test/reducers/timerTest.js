/**
 * Created by lewa on 07/07/2016.
 */
'use strict';
import expect from 'expect';
import reducer from '../../src/reducers/timer';
import * as types from 'actions/const';
import $ from 'jquery';

describe('timerReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      time: 0,
      timesup: false
    };
  });

  it('should return defined state', () => {
    expect(reducer(undefined, {})).toExist();
  });

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should update state after calling startTimer', () => {
    var offset = Date.now();
    expect(initialState.offset).toNotEqual(offset);
    var newState = reducer(initialState, {type: types.START_TIMER, offset: offset});
    expect(newState.offset).toEqual(offset);
  });

  it('should go back to initialState after calling stopTimer', () => {
    expect(reducer(initialState, {type: types.STOP_TIMER})).toEqual(initialState);
    var offset = Date.now();
    var newState = $.extend({}, initialState, { offset: offset });
    expect(newState).toNotEqual(initialState);
    expect(reducer(newState, {type: types.STOP_TIMER})).toEqual(initialState);
  });

  it('should update state after calling tickTimer', () => {
    var offset = 20;
    var state = $.extend({}, initialState, { offset: offset });
    expect(state.offset).toEqual(offset);
    var time = 1;
    var newState = reducer(state, {type: types.TICK_TIMER, time: time});
    expect(newState.time).toNotEqual(initialState.time);
    expect(newState.time).toEqual(initialState.time - (time - offset));
    expect(newState.offset).toNotEqual(offset);
    expect(newState.offset).toEqual(time);
  });
});
