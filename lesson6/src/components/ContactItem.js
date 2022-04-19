export default function ContactItem({contact, onEditContact, onDelete}) {
    const onDeleteBtnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(contact)
    }
    return (
        <div className='contactItem'>
            <div className="name">{contact.name}</div>
            <div className="surname">{contact.surname}</div>
            <div className="phone">{contact.phone}</div>
            <button className='contactBtn' onClick={onDeleteBtnClick}>
                Delete
            </button>
            <button className='contactBtn' onClick={onEditContact.bind(null, contact)}>
                Edit
            </button>
        </div>
    )
}