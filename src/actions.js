export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETE_TODO";

export function deleteTodo(id) {
    return { type: DELETE_TODO, id: id }
}

export function addTodo(value) {
    console.log(value)
    return { type: ADD_TODO, value: value }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO,  id: id }
}

export function clearCompletedTodos() {
    return { type: CLEAR_COMPLETED_TODOS }
}