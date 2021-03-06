import { createSlice } from "@reduxjs/toolkit";
import {
    createUser,
    deleteUser,
    updateUser,
} from "../../services/services";

const initialState = {
    isLoading: false,
    users: [],
};

export const createUserThunk = (user) => async (dispatch, getState) => {
    const data = await createUser(user);
    const state = getState();
    const newUsers = [...state.users.users, user];
    dispatch(setUsers(newUsers));
    return data;
};

export const updateUserThunk = (user) => {
    return async function (dispatch, getState){
        const data = await updateUser(user);
        const state = getState();
        const newUsers = state.users.users.map((userItem) =>
            userItem.id === user.id ? user : userItem);
        dispatch(setUsers(newUsers));
        return data;
    }
}

export const deleteUserThunk = (id) => {
    return async function (dispatch, getState) {
        const data = await deleteUser(id);
        const state = getState();
        const newUsers = state.users.users.filter((user) => user.id !== id);
        dispatch(setUsers(newUsers));
        return data;
    };
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, { payload }) => {
            state.users = payload;
        },
        toogleIsLoading: (state, { payload }) => {
            state.isLoading = payload !== undefined ? payload : !state.isLoading;
        },
    },
});

export const { setUsers, toogleIsLoading } = usersSlice.actions;

export default usersSlice.reducer;
