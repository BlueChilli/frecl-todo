export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const COMPLETE_ALL = 'COMPLETE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function completeAll() {
  return {
    type: COMPLETE_ALL
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}
