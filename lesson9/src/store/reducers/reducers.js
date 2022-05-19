import {
    ACTION_ADD_TODO,
    ACTION_TOGGLE_TODO,
    ACTION_REMOVE_TODO,
} from "../actions/actions";

const INITIAL_STATE = {
    todos: [
        {id: 1, title: 'read book', isDone: true},
        {id: 2, title: 'drink coffee', isDone: false},
        {id: 3, title: 'go for a walk', isDone: false},
        {id: 4, title: 'have a breakfast', isDone: true},
    ],
};
export default function reducer(state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case ACTION_ADD_TODO:
            const newTodos = state.todos.map((todo) =>
                todo.id === payload ? {...todo, isDone: !todo.isDone} : todo
            );
            return {...state, todos: newTodos};
        case ACTION_TOGGLE_TODO:
            const newTodo = {id: Date.now(), ...payload};
            return {...state, todos: [...state.todos, newTodo]};
        case ACTION_REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== payload),
            };

        default:
            return state;
    }
}
