import {createReducer} from "redux-immutablejs";
import Immutable from "immutable";
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../Actions/Todos'

const initialState = Immutable.List([
  Immutable.Map({
    text: 'Use Redux',
    completed: true,
    id: 0
  }),
  Immutable.Map({
    text: 'Create todo app',
    completed: false,
    id: 1
  })
]);

export default createReducer(initialState, {
  ADD_TODO: (state, action) => {
    return state.push(
      Immutable.Map({
        id: state.reduce((maxId, todo) => Math.max(todo.get('id'), maxId), -1) + 1,
        completed: false,
        text: action.text
      }));
  },
  DELETE_TODO: (state, action) => {
    return state.filter(todo => todo.get('id') !== action.id);
  },
  EDIT_TODO: (state, action) => {
    return state.map(todo => todo.get('id') === action.id ? todo.set('text', action.text) : todo);
  },
  TOGGLE_TODO: (state, action) => {
     return state.map(todo =>
       todo.get('id') === action.id ? todo.set('completed', !todo.get('completed')) : todo
     );
  },
  COMPLETE_ALL: (state, action) => {
    const areAllMarked = state.every(todo => todo.get('completed'))
    return state.map(todo => todo.set('completed', !areAllMarked));
  },
  CLEAR_COMPLETED: (state, action) => {
    return state.filter(todo => todo.get('completed') === false);
  }
});
