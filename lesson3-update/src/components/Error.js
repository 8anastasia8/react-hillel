import React, {Component} from 'react';

class Error extends Component {

    render() {
        const {error} = this.props
        return (
            <div className={ error ? 'errorItem' : 'hide'}>
                <p>Error! Please fill in all the required fields</p>
            </div>
        );
    }
}

export default Error;