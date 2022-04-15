import NotesList from "./NotesList";
import {useCallback, useEffect} from "react";
import {
    createNote,
    getNotes,
    deleteNote,
    updateNote,

} from "../services/notesServices";
import {useAsync} from "../hooks/hooks";
import {BsFillPlusCircleFill} from "react-icons/bs";

export default function Notes() {
    const {
        run,
        data: notes,
        setData: setNotes,
    } = useAsync(getNotes, []);

    useEffect(() => run(), []);


    const onDeleteButtonClick = (id) => {
        deleteNote(id);
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    const onUpdateNoteClick = (id, editDescription) => {
        const note = notes.find((note) => note.id !== id);
        const newNote = {
            ...note,
            id: id,
            description: editDescription
        };
        updateNote(newNote);
        const newNotes = notes.map((note) => (note.id === id ? newNote : note));
        setNotes(newNotes);
    }

    const onCreateNote = useCallback(
        () => {
            const newNote = {
                description: ''
            };
            createNote(newNote).then((data) => {
                setNotes([...notes, data])
            })
        },
        [notes]
    );

    return (
        <div className="notes-list">
            <div className="header">
                <h1>Notes</h1>
                <button className='addNote' onClick={onCreateNote}><BsFillPlusCircleFill className='icon' size='2em'/>
                </button>
            </div>
            <NotesList
                notes={notes}
                onDeleteButtonClick={onDeleteButtonClick}
                onUpdateNoteClick={onUpdateNoteClick}
            />
        </div>
    )
}