import { START_TIMER, STOP_TIMER, TICK } from '../actions/const';

const initialState = {
  time: 0,
  timesup: false
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      state.offset = action.offset;
      return state;
    case STOP_TIMER:
      return initialState;
    case TICK:
      state.time = state.time - (action.time - state.offset);
      state.offset = action.time;
      return state;
    default:
      return state;
  }
}

