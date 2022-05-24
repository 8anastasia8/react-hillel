import useUsers from "../hooks/useUsers";
import {useParams} from "react-router";
import Loading from "../components/common/Loading";
import UserForm from "../components/Users/UserForm";

export default function UserEditPage(){
    const { getUser, saveUser, removeUser, isLoading} = useUsers();
    const params = useParams();
    const user = getUser(params.id);

    return(
        <div>
            <h1>User Edit</h1>
            {isLoading || !user.id ? (
                <Loading/>
            ) : (
                <UserForm user={user} saveUser={saveUser} deleteUser={removeUser}/>
            )}
        </div>
    )

}