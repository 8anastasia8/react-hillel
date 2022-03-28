import React, {Component} from 'react';
import Contacts from "./components/Contacts";
import NewContact from "./components/NewContact";
import EditContact from "./components/EditContact";

export default class App extends Component {
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
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeSername = this.handleChangeSername.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
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
            error: false
        })
        this.setState({
            name: '',
            sername: '',
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
        if (this.state.name && this.state.sername && this.state.phone) {
            this.setState({
                display: true
            })
            const newContacts = {
                name: this.state.name,
                sername: this.state.sername,
                phone: this.state.phone
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
                        sername: "",
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
            sername: editingItem.sername,
            phone: editingItem.phone,
            id: editingItem.id
        })
    }

    saveChanges(id) {
        if (this.state.name && this.state.sername && this.state.phone) {
            this.setState({
                display: true,
                editMode: false
            })
            const changeContact = {
                name: this.state.name,
                sername: this.state.sername,
                phone: this.state.phone,
                id: this.state.id
            }
            fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts" + "/" + id, {
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
        fetch("https://612687da3ab4100017a68fd8.mockapi.io/contacts" + "/" + id, {
            method: "DELETE",
        });
        const newContacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({
            contacts: newContacts
        })
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }

    handleChangeSername(e) {
        this.setState({sername: e.target.value});
    }

    handleChangePhone(e) {
        this.setState({phone: e.target.value});
    }

    render() {
        const {display} = this.state;
        const {contacts} = this.state;
        const {editMode} = this.state;
        const {error} = this.state;
        if (editMode) {
            return <EditContact
                error={error}
                id={this.state.id}
                name={this.state.name}
                sername={this.state.sername}
                phone={this.state.phone}
                onCancelBtn={this.cancelBtn}
                onSaveContact={this.saveContact}
                onHandleChangeName={this.handleChangeName}
                onHandleChangeSername={this.handleChangeSername}
                onHandleChangePhone={this.handleChangePhone}
                onSaveChanges={this.saveChanges}
            />
        } else {
            if (display) {
                return <Contacts
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
                    onHandleChangeName={this.handleChangeName}
                    onHandleChangeSername={this.handleChangeSername}
                    onHandleChangePhone={this.handleChangePhone}
                />
            }
        }
    }
}