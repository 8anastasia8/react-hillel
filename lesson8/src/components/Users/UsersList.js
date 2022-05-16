import UsersListItem from "./UsersListItem";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

export default function UsersList({list, removeUser}) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Website</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {list.map((user) => (
                    <UsersListItem
                        key={user.id}
                        item={user}
                        removeUser={removeUser}
                    />
                ))}
            </TableBody>
        </Table>
    )
}