import axios from "axios";
const API_URL = 'https://6252b1217f7fa1b1dde8d52d.mockapi.io/contacts/'

export default axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json'
    },
})