import ContactItem from "./ContactItem";

export default function ContactsList({contacts, onEditContact, onDelete}) {
    return (
        <div className='contactsList'>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onEditContact={onEditContact}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}