import useUsers from "../hooks/useUsers";
import UserForm from "../components/Users/UserForm";

export default function UsersCreatePage(){
    const {getUser, saveUser, removeUser} = useUsers();

    return(
        <div>
            <h1>User Create</h1>
            <UserForm user={getUser()} deleteUser={removeUser} saveUser={saveUser}/>
        </div>
    )
}