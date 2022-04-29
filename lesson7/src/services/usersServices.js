import api from "../api/api";
import {USERS_URI} from "../constants/constants";

export function getUsersList(){
    return api.get(USERS_URI).then((resp) => resp.data)
}