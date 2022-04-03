import Error from "./Error";

export default function EditContact(props) {
    const {name, surname, phone, id} = props.contact;
    return (
        <div className='ContactForm'>
            <h1>Edit contact</h1>
            <Error error={props.error}/>
            <div className="ContactInputs">
                <div className="ContactInput">
                    <p className='inputName'>Name:</p>
                    <input name='name' value={name}
                           onChange={props.onHandleChange}/>
                </div>
                <div className="ContactInput">
                    <p className='inputName'>Surname:</p>
                    <input name='surname' value={surname}
                           onChange={props.onHandleChange}/>
                </div>
                <div className="ContactInput">
                    <p className='inputName'>Phone:</p>
                    <input name='phone' value={phone}
                           onChange={props.onHandleChange}/>
                </div>
            </div>
            <button className='btnControls' onClick={() => props.onSaveChanges(id)}>
                Save changes
            </button>
            <button className='btnControls' onClick={props.onCancelBtn}>Cancel</button>
        </div>
    )
}