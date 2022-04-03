import ContactItem from "./ContactItem";
import {FaUserPlus} from "react-icons/fa";

export default function ContactsList(props) {
    return (<div className='contacts'>
            <div className='title'>
                <h1>Contacts</h1>
                <button className='addBtn' onClick={props.onAddNewContact}><FaUserPlus size='1.5em'/></button>
            </div>
            {<table className='contactTable'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                {props.contacts.map((contact) => (<ContactItem
                        key={contact.id}
                        contactItem={contact}
                        onDeleteBtnClick={props.onDeleteBtnClick}
                        onEditBtnClick={props.onEditBtnClick}
                    />))}
            </table>}
        </div>)
}