import {
    TODOS_SET_TODO,
    TODOS_ADD_TODO
} from "./actions";
import {nanoid} from "nanoid";

const INITIAL_STATE = {
    todos: []
}

export default function todosReducer(state = INITIAL_STATE, {type, payload}){
    switch (type){
        case TODOS_SET_TODO:
            return {...state, todos: [...payload]};
        case TODOS_ADD_TODO:
            const newTodo = {id: nanoid(4), ...payload}
            return {...state, todos: [...state.todos, newTodo]};
        default:
            return state;
    }

}