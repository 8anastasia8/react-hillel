import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import TodoForm from "./TodoForm";
import {createNewTodo} from "../store/todos/actions";

const initialValues = {
    title: '',
    completed: false,
}

export default function TodoModalWindow(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function closeModalWindow(){
        navigate('/');
    }

    function onSubmit(todo){
        dispatch(createNewTodo(todo));
    }

    return(
        <Dialog open onClose={closeModalWindow} maxWidth='sx'>
            <DialogTitle title='Create Todo'/>
            <DialogContent>
                <TodoForm
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    onCancel={closeModalWindow}
                />
            </DialogContent>
        </Dialog>
    )
}