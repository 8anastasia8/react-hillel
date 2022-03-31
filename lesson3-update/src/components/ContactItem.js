import React, {Component} from 'react';
import {TiDelete} from "react-icons/ti";
import {RiEdit2Fill} from "react-icons/ri";

class ContactItem extends Component {
    render() {
        const {name, surname, phone, id} = this.props.contactItem;
        return (
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{phone}</td>
                <td>
                    <button className='delBtn' onClick={() => this.props.onDeleteBtnClick(id)}><TiDelete/></button>
                </td>
                <td>
                    <button className='editBtn' onClick={() => this.props.onEditBtnClick(id)}><RiEdit2Fill/></button>
                </td>
            </tr>
            </tbody>
        );
    }
}

export default ContactItem;