import {TiDelete} from "react-icons/ti";
import {RiEdit2Fill} from "react-icons/ri";

export default function ContactItem(props) {
    const {name, surname, phone, id} = props.contactItem;
    return (
        <tbody>
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>
                <button className='delBtn' onClick={() => props.onDeleteBtnClick(id)}><TiDelete/></button>
            </td>
            <td>
                <button className='editBtn' onClick={() => props.onEditBtnClick(id)}><RiEdit2Fill/></button>
            </td>
        </tr>
        </tbody>
    )
}