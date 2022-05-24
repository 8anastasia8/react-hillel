import {Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell} from "@mui/material";
import UsersListItem from "./UsersListItem";

function UsersList({list, removeUser, onSelect}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((user) => (
                        <UsersListItem key={user.id} item={user} removeUser={removeUser} onSelect={onSelect}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersList;
