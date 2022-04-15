import NotesItem from "./NotesItem";

export default function NotesList(props) {
    return (
        <div className='notesList'>
            {props.notes.map((note) => (
                <NotesItem
                    key={note.id}
                    note={note}
                    onDeleteButtonClick={props.onDeleteButtonClick}
                    onUpdateNoteClick={props.onUpdateNoteClick}
                />
            ))}
        </div>
    )
}