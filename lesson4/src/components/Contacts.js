import {useEffect, useState} from "react";
import ContactsList from "./ContactsList";
import NewContact from "./NewContact";
import EditContact from "./EditContact";

export default function Contacts() {
    const [display, setDisplay] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        name: '',
        surname: '',
        phone: '',
        id: ''
    })
    const {name, phone, surname} = contact;
    const url = "https://612687da3ab4100017a68fd8.mockapi.io/contacts";
    const formValidation = name && surname && phone;


    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setContacts(data));
    }, [])

    const addNewContact = () => {
        setDisplay(false);
        setContact({
            name: '',
            surname: '',
            phone: '',
            id: ''
        })
    }

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const saveContact = () => {
        if (formValidation) {
            setDisplay(true);
            setError(false);
            const newContacts = {
                name: name,
                surname: surname,
                phone: phone
            }
            fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newContacts),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setContacts([...contacts, data]);
                })
        } else {
            setError(true)
        }
    }

    const editBtnClick = (id) => {
        setEditMode(true);
        let editingItem = contacts.find(contact => {
            return contact.id === id
        })
        setContact({
            name: editingItem.name,
            surname: editingItem.surname,
            phone: editingItem.phone,
            id: editingItem.id
        })
    }

    const saveChanges = (id) => {
        if (formValidation) {
            setDisplay(true);
            setEditMode(false);
            setError(false)
            const changeContact = {
                name: name,
                surname: surname,
                phone: phone,
                id: id
            }
            fetch(url + '/' + id, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(changeContact)
            })
            const newContacts = contacts.map((contact) =>
                (contact.id === id ? changeContact : contact))
            setContacts(newContacts)
        } else {
            setError(true)
        }
    }

    const onDeleteBtnClick = (id) => {
        fetch(url + '/' + id, {
            method: "DELETE"
        });
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    }

    const cancelBtn = () => {
        setDisplay(true);
        setEditMode(false);
        setError(false);
    }


    if (editMode) {
        return <EditContact
            error={error}
            contact={contact}
            onCancelBtn={cancelBtn}
            onHandleChange={handleChange}
            onSaveChanges={saveChanges}
        />
    } else {
        if (display) {
            return <ContactsList
                contacts={contacts}
                onAddNewContact={addNewContact}
                onDeleteBtnClick={onDeleteBtnClick}
                onEditBtnClick={editBtnClick}
            />
        } else {
            return <NewContact
                error={error}
                onCancelBtn={cancelBtn}
                onSaveContact={saveContact}
                onHandleChange={handleChange}
            />
        }
    }
}