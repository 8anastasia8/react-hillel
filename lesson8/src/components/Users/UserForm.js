import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, ButtonGroup, Container, TextField} from "@mui/material";

export default function UserForm({user, saveUser, removeUser}) {
    const [formState, setFormState] = useState({...user});
    const navigate = useNavigate();

    useEffect(() => {
        setFormState(user);
    }, [user])

    function onInputChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    function saveUserClick(e) {
        console.log('qwerty')
        e.preventDefault();
        saveUser(formState).then(navigate('/users'));
    }

    function cancelClick() {
        console.log('Cancel')
        navigate('/users');
    }

    function removeUserClick() {
        removeUser().then(() => {
            navigate('/users');
        });
    }

    return (
        <Container maxWidth='sm'>
            <Box
                component='form'
                sx={{
                    "& >:not(style)": {m: 1},
                    display: 'flex',
                    flexDirection: 'column'
                }}
                noValidate
                autoComplete='off'
                onSubmit={saveUserClick}>
                <TextField
                    label='Name'
                    name='name'
                    value={formState.name}
                    onChange={onInputChange}
                />
                <TextField
                    label='Username'
                    name='username'
                    value={formState.username}
                    onChange={onInputChange}
                />
                <TextField
                    label='Phone'
                    name='phone'
                    value={formState.phone}
                    onChange={onInputChange}
                />
                <TextField
                    label='Email'
                    name='email'
                    value={formState.email}
                    onChange={onInputChange}
                />
                <TextField
                    label='Website'
                    name='website'
                    value={formState.website}
                    onChange={onInputChange}
                />


                <Box my={2}>
                    <ButtonGroup variant='contained'>
                        <Button color={'primary'} type='submit'>
                            Save
                        </Button>
                        <Button color={'primary'} onClick={cancelClick}>
                            Cancel
                        </Button>
                        {removeUser ? (
                            <Button color={'error'} onClick={removeUserClick}>Delete</Button>
                        ) : null}
                    </ButtonGroup>
                </Box>
            </Box>
        </Container>
    )

}