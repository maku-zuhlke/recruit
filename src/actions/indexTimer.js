import * as types from './const';

export function startTimer(offset) {
  return { type: types.START_TIMER, offset }
}

export function tickTimer(time) {
  return { type: types.TICK_TIMER, time }
}

export function stopTimer() {
  return { type: types.STOP_TIMER }
}
