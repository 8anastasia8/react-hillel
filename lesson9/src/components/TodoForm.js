import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/actions";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {IconButton} from "@mui/material";

const initialValues = {
    title: "",
    isDone: false,
};

export default function TodoForm() {
    const [values, setValues] = useState(initialValues);
    const dispatch = useDispatch();

    function onFormSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(values));

        resetForm();
    }

    function resetForm() {
        setValues(initialValues);
    }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    return (
        <form autoComplete="off" onSubmit={onFormSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <TextField
                        label="Text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={2}>
                    <IconButton type="submit" color="primary">
                        <AddCircleIcon fontSize="inherit"/>
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    );
}
