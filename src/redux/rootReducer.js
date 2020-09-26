import { combineReducers } from 'redux';
import { DECREMENT, INCREMENT, ASYNC_INCREMENT,CHANGE_THEME } from './types';

export const counterReducer = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === ASYNC_INCREMENT) {
    return state + 1;
  }
  return state;
};

const initialState = {
  value: 'light',
};
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state,value : action.payload}
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
