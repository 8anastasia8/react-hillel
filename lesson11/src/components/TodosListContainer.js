import React, {useEffect} from "react";
import TodosList from "./TodosList";
import {useDispatch, useSelector} from "react-redux";
import {FILTER_ALL, FILTER_DONE} from "../constants/filters";
import {
    removeTodo,
    tooggleTodo,
    fetchTodos
} from '../store/todos/actions';

export default function TodosListContainer(){
    let todos = useSelector((state) => state.todos.todos);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    if(filter !== FILTER_ALL){
        todos = todos.filter((todo) => todo.completed === (filter === FILTER_DONE))
    }

    function toggleTodoClick(id){
        dispatch(tooggleTodo(id));
    }

    function removeTodoClick(id){
        dispatch(removeTodo(id))
    }

    useEffect(()=>{
        dispatch(fetchTodos());
    }, [dispatch])

    return(
        <>

            <TodosList
                todos={todos}
                toggleTodo={toggleTodoClick}
                removeTodo={removeTodoClick}
            />
        </>
    )
}