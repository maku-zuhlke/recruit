import { START_TIMER, STOP_TIMER, TICK } from '../actions/const';

const initialState = {
  time: Date.now(),
  interval: new Date(Date.now() + 30*1000)
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        offset: action.offset,
        interval: action.interval
      };
    case STOP_TIMER:
      return {
        ...initialState
      };
    case TICK:
      return {
        ...state,
        time: state.interval - action.time,
        offset: action.time
      };
    default:
      return state;
  }
}

