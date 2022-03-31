import React, {Component} from 'react';
import ContactsList from "./ContactsList";
import NewContact from "./NewContact";
import EditContact from "./EditContact";

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            editMode: false,
            error: false,
            contacts: []
        }
        this.addNewContact = this.addNewContact.bind(this)
        this.cancelBtn = this.cancelBtn.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.editBtnClick = this.editBtnClick.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
    }

    componentDidMount() {
        fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts")
            .then((resp) => resp.json())
            .then((data) => this.setState({contacts: data}));
    }

    addNewContact() {
        this.setState({
            display: false,
            error: false,
            name: '',
            surname: '',
            phone: ''
        })
    }

    cancelBtn() {
        this.setState({
            display: true,
            editMode: false,
            error: false
        })
    }

    saveContact() {
        const {name, surname, phone} = this.state;
        if (name && surname && phone) {
            this.setState({
                display: true
            })
            const newContacts = {
                name: name,
                surname: surname,
                phone: phone
            }
            fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newContacts),
            })
                .then((resp) => resp.json())
                .then((data) =>
                    this.setState({
                        error: false,
                        contacts: [...this.state.contacts, data],
                        name: "",
                        surname: "",
                        phone: ""
                    })
                );

        } else {
            this.setState({
                error: true
            })
        }
    }

    editBtnClick(id) {
        this.setState({
            editMode: true
        })
        let editingItem = this.state.contacts.find(contact => {
            return contact.id === id
        })
        this.setState({
            name: editingItem.name,
            surname: editingItem.surname,
            phone: editingItem.phone,
            id: editingItem.id
        })
    }

    saveChanges(id) {
        const {name, surname, phone} = this.state;
        if (name && surname && phone) {
            this.setState({
                display: true,
                editMode: false
            })
            const changeContact = {
                name: name,
                surname: surname,
                phone: phone,
                id: id
            }
            fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts/" + id, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(changeContact),
            });
            this.setState({
                contacts: this.state.contacts.map((contact) => (contact.id === id ? changeContact : contact)),
            });
        } else {
            this.setState({
                error: true
            })
        }

    }

    onDeleteBtnClick(id) {
        console.log('Delete', id)
        fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts/" + id, {
            method: "DELETE",
        });
        const newContacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({
            contacts: newContacts
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        const {display, contacts, editMode, error, id, name, surname, phone} = this.state;
        if (editMode) {
            return <EditContact
                error={error}
                id={id}
                name={name}
                surname={surname}
                phone={phone}
                onCancelBtn={this.cancelBtn}
                onSaveContact={this.saveContact}
                onHandleChange={this.handleChange}
                onSaveChanges={this.saveChanges}
            />
        } else {
            if (display) {
                return <ContactsList
                    contacts={contacts}
                    onDeleteBtnClick={this.onDeleteBtnClick}
                    onAddNewContact={this.addNewContact}
                    onEditBtnClick={this.editBtnClick}
                />
            } else {
                return <NewContact
                    error={error}
                    onCancelBtn={this.cancelBtn}
                    onSaveContact={this.saveContact}
                    onHandleChange={this.handleChange}
                />
            }
        }
    }
}