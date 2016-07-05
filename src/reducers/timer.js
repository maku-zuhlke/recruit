import { START_TIMER, STOP_TIMER, TICK } from '../actions/const';

const initialState = {
  isOn: false,
  time: 30
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      console.log("££££££££££")
      return {
        isOn: true,
        time: 30,
        offset: action.offset,
        ...state
      };
    case STOP_TIMER:
      clearInterval(state.interval);
      return {
        ...initialState,
        time: state.time
      };
    case TICK:
      return {
        time: state.time - (action.time - state.offset),
        offset: action.time,
        ...state
      };
    default:
      return state;
  }
}

