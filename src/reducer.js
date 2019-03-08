import todosList from "./todos.json";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS } from "./actions"

const initialState = {
    todos: todosList,
}

function reducer(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case ADD_TODO:
            const newTodos = state.todos.slice();
            console.log("reducer")
            newTodos.push({
                userId: 1,
                id: Math.ceil(Math.random() * 1000000),
                title: action.value,
                completed: false
            })
            return { ...state, todos: newTodos }

        case TOGGLE_TODO:
            const newToggleTodos = state.todos.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return { ...state, todos: newToggleTodos }

        case DELETE_TODO:
            const newDeleteTodos = state.todos.filter(todo => todo.id !== action.id)
            return { ...state, todos: newDeleteTodos }

        case CLEAR_COMPLETED_TODOS:
            const newClearTodos = state.todos.filter(todo => todo.completed === false)
            return { ...state, todos: newClearTodos }

        default:
            return state;
    }
}

export default reducer