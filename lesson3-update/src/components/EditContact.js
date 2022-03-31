import React, {Component} from 'react';
import Error from "./Error";

class EditContact extends Component {
    render() {
        const {error, id, name, surname, phone} = this.props;
        return <div className='ContactForm'>
            <h1>Edit contact</h1>
            <Error error={error}/>
            <div className="ContactInputs">
                <div className="ContactInput">
                    <p className='inputName'>Name:</p>
                    <input name='name' value={name}
                           onChange={this.props.onHandleChange}/>
                </div>
                <div className="ContactInput">
                    <p className='inputName'>surname:</p>
                    <input name='surname' value={surname}
                           onChange={this.props.onHandleChange}/>
                </div>
                <div className="ContactInput">
                    <p className='inputName'>Phone:</p>
                    <input name='phone' value={phone}
                           onChange={this.props.onHandleChange}/>
                </div>
            </div>
            <button className='btnControls' onClick={() => this.props.onSaveChanges(id)}>Save
                changes
            </button>
            <button className='btnControls' onClick={this.props.onCancelBtn}>Cancel</button>
        </div>
    }
}

export default EditContact;