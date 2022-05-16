import useUsers from "../hooks/useUsers";
import {Link} from "react-router-dom";
import UsersList from "../components/Users/UsersList";
import {Backdrop, Box, Breadcrumbs, Button, CircularProgress} from "@mui/material";


export default function UsersPage() {
    const {users, removeUser, isLoading} = useUsers();
    return (
        <Box>
            <Breadcrumbs aria-label='breadcrumb'>
                <Link to={'/'}>Dashboard</Link>
            </Breadcrumbs>
            <h1>Users</h1>
            <Button to='create' component={Link}>
                Create User
            </Button>
            {isLoading ? (
                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={isLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            ) : (
                <UsersList list={users} removeUser={removeUser} />
            )}


        </Box>
    )
}