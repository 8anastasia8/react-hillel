import React, {Component} from 'react';
import ContactItem from "./ContactItem";
import {FaUserPlus} from "react-icons/fa";

class ContactsList extends Component {
    render() {
        return (
            <div className='contacts'>
                <div className='title'>
                    <h1>Contacts</h1>
                    <button className='addBtn' onClick={this.props.onAddNewContact}><FaUserPlus size='1.5em'/></button>
                </div>

                {
                    <table className='contactTable'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Phone</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        {this.props.contacts.map((contact) => (
                            <ContactItem
                                key={contact.id}
                                contactItem={contact}
                                onDeleteBtnClick={this.props.onDeleteBtnClick}
                                onEditBtnClick={this.props.onEditBtnClick}
                            />
                        ))}
                    </table>
                }

            </div>
        );
    }
}

export default ContactsList;