export default function UsersListItem({user}) {
    return (
        <tr>
            <td>
                {user.name}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.phone}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.website}
            </td>
        </tr>
    )
}