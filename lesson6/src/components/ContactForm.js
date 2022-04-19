import {useState} from "react";


export default function ContactForm(props) {
    const [contact, setContact] = useState({...props.contact})

    const onContactFormSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            ...contact,
        };
        props.onSave(newContact)
    }

    const onInputChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form className='contactForm' onSubmit={onContactFormSubmit}>
            <label htmlFor='nameInput'> Name </label>
            <input
                type="text"
                name='name'
                id='nameInput'
                value={contact.name}
                onChange={onInputChange}
            />
            <label htmlFor='surnameInput'> Surname </label>
            <input
                type="text"
                name='surname'
                id='surnameInput'
                value={contact.surname}
                onChange={onInputChange}
            />
            <label htmlFor='phoneInput'> Phone </label>
            <input
                type="text"
                name='phone'
                id='phoneInput'
                value={contact.phone}
                onChange={onInputChange}
            />
            <div className='contactFormBtns'>
                <button type='submit' className='contactBtn'>
                    Save
                </button>
                <button type='button' className='contactBtn' onClick={props.onCancel}>
                    Cancel
                </button>
            </div>

        </form>
    )
}