import ListItem from "./TodoListItem";
import List from "@mui/material/List";

export default function TodoList({ todos, toggleTodo, removeTodo }) {
    return (
        <List>
            {todos.map((todo) => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </List>
    );
}
