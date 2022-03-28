import React, {Component} from 'react';
import Error from "./Error";

class NewContact extends Component {
    render() {
        const {error} = this.props;
        if (error) {
            return (
                <div className='ContactForm'>
                    <h1>Create new contact</h1>
                    <Error/>
                    <div className="ContactInputs">
                        <div className='ContactInput'>
                            <p className='inputName'>Name:</p>
                            <input name='name' type="text" onChange={this.props.onHandleChangeName}/>
                        </div>
                        <div className='ContactInput'>
                            <p className='inputName'>Sername:</p>
                            <input name='sername' type="text" onChange={this.props.onHandleChangeSername}/>
                        </div>
                        <div className='ContactInput'>
                            <p className='inputName'>Phone:</p>
                            <input name='phone' type="text" onChange={this.props.onHandleChangePhone}/>
                        </div>
                    </div>
                    <button className='btnControls' onClick={this.props.onSaveContact}>Save</button>
                    <button className='btnControls' onClick={this.props.onCancelBtn}>Cancel</button>
                </div>
            )
        } else {
            return (
                <div className='ContactForm'>
                    <h1>Create new contact</h1>
                    <div className='ContactInputs'>
                        <div className='ContactInput'>
                            <p className='inputName'>Name:</p>
                            <input name='name' type="text" onChange={this.props.onHandleChangeName}/>
                        </div>
                        <div className='ContactInput'>
                            <p className='inputName'>Sername:</p>
                            <input name='sername' type="text" onChange={this.props.onHandleChangeSername}/>
                        </div>
                        <div className='ContactInput'>
                            <p className='inputName'>Phone:</p>
                            <input name='phone' type="text" onChange={this.props.onHandleChangePhone}/>
                        </div>
                    </div>
                    <button className='btnControls' onClick={this.props.onSaveContact}>Save</button>
                    <button className='btnControls' onClick={this.props.onCancelBtn}>Cancel</button>
                </div>
            );
        }
    }
}

export default NewContact;