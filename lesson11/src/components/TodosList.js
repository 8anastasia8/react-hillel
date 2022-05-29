import {List} from '@mui/material';
import TodoListItem from "./TodoListItem";

export default function TodosList({todos, toggleTodo, removeTodo}) {
    return (
        <List component='nav'>
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </List>
    )
}