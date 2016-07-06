import { START_TIMER, STOP_TIMER, TICK } from '../actions/const';

const initialState = {
  time: 0,
  seconds: '60'
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      state.offset = action.offset;
      return state;
    case STOP_TIMER:
      return initialState;
    case TICK:
      console.log('BEFORE', state)
      state.time = state.time - (action.time - state.offset);
      state.offset = action.time;
      console.log(state)
      return state;
    default:
      return state;
  }
}

