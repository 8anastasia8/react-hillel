import {Cancel, Delete, Save} from "@mui/icons-material";
import {Stack, Typography, Button, Grid, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function UserForm({user, saveUser, deleteUser}) {
    const [editUser, setEditUser] = useState(user);
    const navigate = useNavigate();

    useEffect(() => {
        setEditUser(user);
    }, [user.id]);

    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(editUser).then(navigate("/users/"));
    }

    function onDelete() {
        deleteUser(editUser.id).then(navigate("/users/create"));
    }

    function onCancel() {
        navigate("/users");
    }

    function handleChange(e) {
        setEditUser({...editUser, [e.target.name]: e.target.value});
    }

    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="center">
                    User Form
                </Typography>
                <form onSubmit={onFormSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                name="name"
                                value={editUser.name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Surname"
                                name="surname"
                                value={editUser.surname}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Phone"
                                name="phone"
                                value={editUser.phone}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="flex-end">
                        <Grid item xs={12} md={6} align="right">
                            <Stack spacing={2} direction="row" justifyContent="right">
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Delete/>}
                                    onClick={onDelete}
                                    disabled={!user.id}
                                >
                                    Delete
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Save/>}
                                >
                                    Save
                                </Button>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Cancel/>}
                                    onClick={onCancel}
                                >
                                    Cancel
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}
