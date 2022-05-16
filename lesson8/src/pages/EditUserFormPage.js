import UserForm from "../components/Users/UserForm";
import useUser from "../hooks/useUser";
import {Link, useParams} from "react-router-dom";
import {Box, Breadcrumbs} from "@mui/material";
import Loading from "../components/common/Loading";

export default function EditUserFormPage() {
    const params = useParams();
    const {user, saveUser, removeUser, isLoading} = useUser(params.userId);

    return (
        <Box>
            <h1>Users</h1>
            <Breadcrumbs aria-label='breadcrumb'>
                <Link to={'/'}>Dashboard</Link>
            </Breadcrumbs>
            {isLoading ?
                <Loading/> :
                <UserForm
                    user={user}
                    saveUser={saveUser}
                    removeUser={removeUser}
                />
            }


        </Box>

    )
}