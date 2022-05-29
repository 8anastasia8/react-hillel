import React from "react";
import {Button, Grid, TextField, } from "@mui/material";
import {useForm} from "react-hook-form";


export default function TodoForm({INITIAL_VALUES, onCancel, onSubmit}){
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({defaultValues: INITIAL_VALUES});

    function onFormSubmit(data){
        onSubmit(data);
        onCancel();
    }

    return(
        <form autoComplete='off' onSubmit={handleSubmit(onFormSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ margin: 1}}>
                    <TextField
                        label='Title'
                        {...register('title', {required: 'Please, text title'})}
                        error={errors.name && errors.name.message !== ''}
                        helperText={errors.name?.message}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', gap: 1}}>
                    <Button type='submit' variant='contained' size='medium'>
                        Add
                    </Button>
                    <Button
                        variant='contained'
                        size='medium'
                        color='secondary'
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}