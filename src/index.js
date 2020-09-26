import './styles.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer';
import {
  increment,
  decrement,
  asyncIncrement,
  changeTheme,
} from './redux/actions';

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value
});
store.dispatch({ type: 'INIT' });

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});
subBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});
asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});
themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  store.dispatch(changeTheme(newTheme));
});
