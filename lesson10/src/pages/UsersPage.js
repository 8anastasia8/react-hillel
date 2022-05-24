import useUsers from "../hooks/useUsers";
import {useNavigate} from "react-router";
import UsersList from "../components/Users/UsersList";
import Loading from "../components/common/Loading"
import {Link} from "react-router-dom";
import {Box, Button, Grid} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";

export default function UsersPage(){
    const {users, isLoading, removeUser} = useUsers();
    const navigate = useNavigate();

    function handleOnSelect(id){
        navigate(`/users/${id}`);
    }

    return(
        <div>
            <Grid display='flex' flexDirection='row' justifyContent='space-around' alignItems='center'>
                <Grid display='flex' alignItems='center'>
                    <ArrowBack/><Link to={"/"}>Dashboard</Link>
                </Grid>
                <h1>Users</h1>
                <Box sx={{ flexGrow: 0 }}>
                    <Link to="/users/create">
                        <Button variant="contained" color="secondary">
                            Create user
                        </Button>
                    </Link>
                </Box>
            </Grid>
            {isLoading ? (
                <Loading/> ) :
                (<UsersList
                    list={users}
                    removeUser={removeUser}
                    onSelect={handleOnSelect}
                />
            )}
        </div>
    )
}