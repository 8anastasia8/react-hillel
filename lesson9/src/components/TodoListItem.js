import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from "@mui/material";
import {Divider} from "@mui/material";
import {ListItem} from "@mui/material";

export default function TodoListItem({todo, toggleTodo, removeTodo}) {
    function handleDeleteActionClick(e) {
        e.preventDefault();
        removeTodo(todo.id);
    }

    function handleItemClick(e) {
        toggleTodo(todo.id);
    }

    return (
        <>
            <ListItem button onClick={handleItemClick}>
                <ListItemIcon>
                    {todo.isDone ? <CheckBox/> : <CheckBoxOutlineBlankIcon/>}
                </ListItemIcon>
                <ListItemText primary={todo.title}/>
                <ListItemSecondaryAction onClick={handleDeleteActionClick}>
                    <HighlightOffIcon/>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>
    );
}