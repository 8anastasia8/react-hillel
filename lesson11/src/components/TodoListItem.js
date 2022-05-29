import {Divider, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from "@mui/material";
import {Check, CheckBoxOutlineBlank, Delete} from "@mui/icons-material";

export default function TodoListItem({todo, toggleTodo, removeTodo}){
    function deleteTodoClick(e){
        e.preventDefault();
        removeTodo(todo.id)
    }

    function toggleTodoClick(){
        toggleTodo(todo.id)
    }

    return(
        <>
            <ListItem button onClick={toggleTodoClick} style={{cursor: 'pointer'}}>
                <ListItemIcon >
                    {todo.completed ? <Check/> : <CheckBoxOutlineBlank/>}
                </ListItemIcon>
                <ListItemText primary={todo.title}/>
                <ListItemSecondaryAction onClick={deleteTodoClick} style={{cursor: 'pointer'}}>
                    <Delete/>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>
    )
}