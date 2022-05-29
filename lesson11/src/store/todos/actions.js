import {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodos
} from '../../services/services';

export const TODOS_SET_TODO = 'TODOS_SET_TODO';
export const TODOS_ADD_TODO = 'TODOS_ADD_TODO';

export const setTodos = (todos) => ({
    type: TODOS_SET_TODO,
    payload: todos
})

export const addTodo = (todo) =>({
    type: TODOS_ADD_TODO,
    payload: todo
})

export const fetchTodos = () =>{
    return function (dispatch) {
        getTodos().then((todos) => dispatch(setTodos(todos)));
    }
}

export const tooggleTodo = (id)=> {
    return function (dispatch, getState){
        const { todos: todosSlice } = getState();

        let newTodo = todosSlice.todos.find((todo) => todo.id === id);
        newTodo = { ...newTodo, completed: !newTodo.completed};

        updateTodo(newTodo).then(()=>{
            const newTodos = todosSlice.todos.map((todo) =>
            todo.id === id ? newTodo : todo);
            dispatch(setTodos(newTodos));
        })
    }
}

export const removeTodo = (id) => {
    return function (dispatch, getState){
        deleteTodo(id).then(()=>{
            const {todos} = getState();
            const newTodos = todos.todos.filter((todo) => todo.id !== id);
            dispatch(setTodos(newTodos));
        })
    }
}

export const createNewTodo = (todo) => {
    return function (dispatch){
        createTodo(todo).then((data) => {
            dispatch(addTodo(data));
        })
    }
}