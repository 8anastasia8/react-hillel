import {useState, useEffect} from "react";
import api from '../api/api'

const EMPTY_CONTACT = {
    name: '',
    surname: '',
    phone: ''
}

export default function useContacts(){
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        api.get().then(({data}) => setContacts(data));
    }, [])

    function addContact(contact){
        api
            .post('', contact)
            .then(({data}) => setContacts((contacts) => [...contacts, data]))
    }

    function deleteContact(id){
        api.delete(id);
        setContacts(contacts.filter((item) => item.id !== id));
    }

    function updateContact(contact){
        api
            .put(contact.id, contact)
            .then(({data}) =>
            setContacts((contacts) =>
            contacts.map((item) => (item.id === contact.id ? data : item))
            ))
    }

    return{
        EMPTY_CONTACT,
        contacts,
        addContact,
        deleteContact,
        updateContact
    }


}