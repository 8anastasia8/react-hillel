import {useNavigate} from "react-router-dom";
import {Button, TableCell, TableRow} from "@mui/material";

export default function UsersListItem({item, removeUser}) {
    const navigate = useNavigate();
    const onRemoveUserClick = () => {
        removeUser(item.id);
    }
    return (
        <TableRow>
            <TableCell>
                {item.name}
            </TableCell>
            <TableCell>
                {item.username}
            </TableCell>
            <TableCell>
                {item.phone}
            </TableCell>
            <TableCell>
                {item.email}
            </TableCell>
            <TableCell>
                {item.website}
            </TableCell>
            <TableCell>
                <Button onClick={()=>navigate(item.id.toString())}>Edit</Button>
                <Button color="error" onClick={onRemoveUserClick}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}