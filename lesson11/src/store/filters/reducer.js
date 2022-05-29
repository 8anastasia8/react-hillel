import {FILTER_ALL} from '../../constants/filters';
import {createSlice} from "@reduxjs/toolkit";

const initialState = FILTER_ALL;

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, {type, payload}) => {
            return payload;
        },
    },
});

export const {changeFilter} = filterSlice.actions;

export default filterSlice.reducer;

