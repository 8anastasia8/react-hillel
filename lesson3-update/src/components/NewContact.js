import React, {Component} from 'react';
import Error from "./Error";

class NewContact extends Component {
    render() {
        const {error} = this.props;
        return <div className='ContactForm'>
                <h1>Create new contact</h1>
                <Error error={error}/>
                <div className="ContactInputs">
                    <div className='ContactInput'>
                        <p className='inputName'>Name:</p>
                        <input name='name' type="text" onChange={this.props.onHandleChange}/>
                    </div>
                    <div className='ContactInput'>
                        <p className='inputName'>surname:</p>
                        <input name='surname' type="text" onChange={this.props.onHandleChange}/>
                    </div>
                    <div className='ContactInput'>
                        <p className='inputName'>Phone:</p>
                        <input name='phone' type="text" onChange={this.props.onHandleChange}/>
                    </div>
                </div>
                <button className='btnControls' onClick={this.props.onSaveContact}>Save</button>
                <button className='btnControls' onClick={this.props.onCancelBtn}>Cancel</button>
            </div>
    }
}

export default NewContact;