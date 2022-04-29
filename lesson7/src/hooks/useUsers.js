import {getUsersList} from "../services/usersServices";
import {useEffect, useState} from "react";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        getUsersList()
            .then((data) => setUsers(data))
            .catch((err) => setError(err))
    }, []);

    return {
        users,
        error
    };
}