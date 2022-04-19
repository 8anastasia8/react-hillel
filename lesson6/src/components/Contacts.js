import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";
import {useContext, useState} from "react";
import useContacts from "../hooks/useContacts";
import ThemeContext from "../context/themeContext";


export default function Contacts() {
    const theme = useContext(ThemeContext);
    const { EMPTY_CONTACT, contacts, addContact, deleteContact, updateContact} = useContacts();
    const [page, setPage] = useState('list');
    const [editedContact, setEditedContact] = useState(EMPTY_CONTACT);

    const addNewBtnClick = () => {
        setPage('form');
        setEditedContact(EMPTY_CONTACT)
    }

    const cancelBtnClick = () => {
        setPage('list')
    }

    const contactEdited = (contact) => {
        setEditedContact(contact);
        setPage('form')
    }

    function contactDelete(contact){
        deleteContact(contact.id);
    }

    const saveContact = (contact) => {
        if (contact.id) {
            updateContact(contact)
        } else {
            addContact(contact);
        }
        setEditedContact(contact);
        setPage('list');
    }

    return (
        <>
            <div className={'container ' + theme}>
                {page === 'list' ? (
                    <>
                        <div className='header'>
                            <h1>Contacts</h1>
                            <button onClick={addNewBtnClick} className='addNewContactBtn'>
                                Add new
                            </button>
                        </div>
                        <ContactsList
                            contacts={contacts}
                            onEditContact={contactEdited}
                            onDelete={contactDelete}
                        />
                    </>
                ) : (
                    <ContactForm
                        contact={editedContact}
                        onCancel={cancelBtnClick}
                        onSave={saveContact}
                    />
                )}
            </div>
        </>

    );
}