import * as types from './const';

export function startTimer(offset, interval) {
  return { type: types.START_TIMER, offset, interval }
}

export function stopTimer() {
  return { type: types.STOP_TIMER }
}

export function tick(time) {
  return { type: types.TICK, time }
}