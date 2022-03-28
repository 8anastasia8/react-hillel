import React, {Component} from 'react';
import Error from "./Error";

class EditContact extends Component {
    render() {
        const {error} = this.props;
        if (error) {
            return (
                <div className='ContactForm'>
                    <h1>Edit contact</h1>
                    <Error/>
                    <div className="ContactInputs">
                        <div className="ContactInput">
                            <p className='inputName'>Name:</p>
                            <input name='name' value={this.props.name}
                                   onChange={this.props.onHandleChangeName}/>
                        </div>
                        <div className="ContactInput">
                            <p className='inputName'>Sername:</p>
                            <input name='sername' value={this.props.sername}
                                   onChange={this.props.onHandleChangeSername}/>
                        </div>
                        <div className="ContactInput">
                            <p className='inputName'>Phone:</p>
                            <input name='phone' value={this.props.phone}
                                   onChange={this.props.onHandleChangePhone}/>
                        </div>
                    </div>
                    <button className='btnControls' onClick={() => this.props.onSaveChanges(this.props.id)}>Save
                        changes
                    </button>
                    <button className='btnControls' onClick={this.props.onCancelBtn}>Cancel</button>
                </div>
            );
        } else {
            return (
                <div className="ContactForm">
                    <h1>Edit contact</h1>
                    <div className="ContactInputs">
                        <div className="ContactInput">
                            <p className='inputName'>Name:</p>
                            <input name='name' value={this.props.name} onChange={this.props.onHandleChangeName}/>
                        </div>
                        <div className="ContactInput">
                            <p className='inputName'>Sername:</p>
                            <input name='sername' value={this.props.sername}
                                   onChange={this.props.onHandleChangeSername}/>
                        </div>
                        <div className="ContactInput">
                            <p className='inputName'>Phone:</p>
                            <input name='phone' value={this.props.phone}
                                   onChange={this.props.onHandleChangePhone}/>
                        </div>
                    </div>
                    <button className='btnControls' onClick={() => this.props.onSaveChanges(this.props.id)}>
                        Save changes
                    </button>
                    <button className='btnControls' onClick={this.props.onCancelBtn}>Cancel</button>
                </div>
            );
        }

    }
}

export default EditContact;