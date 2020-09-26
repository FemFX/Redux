import { DECREMENT, INCREMENT, ASYNC_INCREMENT,CHANGE_THEME } from './types';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const asyncIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: ASYNC_INCREMENT });
    }, 2000);
  };
};
export const changeTheme = (newTheme) => {
  return {
    type: CHANGE_THEME,
    payload : newTheme
  };
};
