export const ACTION_ADD_TODO = 'ACTION_ADD_TODO';
export const ACTION_TOGGLE_TODO = 'TODOS_ADD_TODO';
export const ACTION_REMOVE_TODO = 'ACTION_REMOVE_TODO';

export const toggleTodo = (id) => ({
    type: ACTION_ADD_TODO,
    payload: id,
});

export const addTodo = (todo) => ({
    type: ACTION_TOGGLE_TODO,
    payload: todo,
});

export const removeTodo = (id) => ({
    type: ACTION_REMOVE_TODO,
    payload: id,
});
