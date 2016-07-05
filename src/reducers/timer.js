import { START_TIMER, STOP_TIMER, TICK } from '../actions/const';

const initialState = {
  isOn: false,
  time: 30
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      console.log('%%%%%%%%%%%%%%%')
      return {
        ...state,
        isOn: true,
        time: 30, // Begin time at 30 everytime we start the timer
        offset: action.offset,
        interval: action.interval
      };
    case STOP_TIMER:
      clearInterval(state.interval);
      return {
        ...initialState,
        time: state.time
      };
    case TICK:
      return {
        ...state,
        time: state.time - (action.time - state.offset),
        offset: action.time
      };
    default: 
      return state;
  }
}

