import NotesList from "./NotesList";
import {useCallback, useEffect} from "react";
import {
    createNote,
    getNotes,
    deleteNote,
    updateNote,

} from "../services/notesServices";
import {useAsync} from "../hooks/hooks";
import {FaStickyNote} from "react-icons/fa";

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

    const {description} = notes;
    const createNewNote = (e) => {
        e.preventDefault();
        onCreateNote(description);
    }

    const onCreateNote = useCallback(
        (description) => {
            const newNote = {
                description
            };
            console.log('new note');

            createNote(newNote).then((data) => {
                setNotes([...notes, data])
            })
        },
        [notes]
    );


    return (
        <>
            <div className="header">
                <h1>Notes</h1>
                <button className='addNote' onClick={createNewNote}><FaStickyNote size='1.5em'/></button>
            </div>

            <NotesList
                notes={notes}
                onDeleteButtonClick={onDeleteButtonClick}
                onUpdateNoteClick={onUpdateNoteClick}
            />
        </>
    )
}