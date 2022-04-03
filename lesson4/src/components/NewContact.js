import Error from "./Error";

export default function NewContact(props) {
    return (
        <div className='ContactForm'>
            <h1>Create new contact</h1>
            <Error error={props.error}/>
            <div className="ContactInputs">
                <div className='ContactInput'>
                    <p className='inputName'>Name:</p>
                    <input name='name' type="text" onChange={props.onHandleChange}/>
                </div>
                <div className='ContactInput'>
                    <p className='inputName'>Surname:</p>
                    <input name='surname' type="text" onChange={props.onHandleChange}/>
                </div>
                <div className='ContactInput'>
                    <p className='inputName'>Phone:</p>
                    <input name='phone' type="text" onChange={props.onHandleChange}/>
                </div>
            </div>
            <button className='btnControls' onClick={props.onSaveContact}>Save</button>
            <button className='btnControls' onClick={props.onCancelBtn}>Cancel</button>
        </div>
    )
}