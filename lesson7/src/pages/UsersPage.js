import useUsers from "../hooks/useUsers";
import {Link} from "react-router-dom"
import UsersList from "../components/Users/UsersList";
import {BsArrowLeft} from "react-icons/bs";

export default function UsersPage() {
    const {users} = useUsers();
    return (
        <div className='content'>
            <h1>Users</h1>
            <Link className='link' to={'/'}><BsArrowLeft className='icon'/>Dashboard</Link>
            <UsersList list={users}/>
        </div>
    )
}