import {FaTrash} from "react-icons/fa";
import {useState} from "react";

export default function NotesItem(props) {
    const {id, description} = props.note;
    const [editDescription, setEditDescription] = useState(description);


    const onTextChange = (e) => {
        setEditDescription(e.target.value);
    }

    const onTextSave = (e) => {
        e.preventDefault();
        props.onUpdateNoteClick(id, editDescription)
    }

    const onDelete = (e) => {
        e.stopPropagation();
        props.onDeleteButtonClick(id);
    }

    return (
        <div className='note'>
            <textarea
                value={editDescription}
                onChange={onTextChange}
                onBlur={onTextSave}
                className='note-txt'
            />
            <button className='delete-btn' onClick={onDelete}><FaTrash size='1.5em'/></button>
        </div>
    )
}