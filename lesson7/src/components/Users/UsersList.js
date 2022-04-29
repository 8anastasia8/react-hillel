import UsersListItem from "./UsersListItem";

export default function UsersList({list}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
            {list.map((user) => (
                <UsersListItem
                    key={user.id}
                    user={user}/>
            ))}
            </tbody>
        </table>
    )
}