import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newContact: {}
        }

    }
    handleAddContact(e){
        e.preventDefault()
        if(this.refs.fname.value === '' ||this.refs.lname.value === '' ||this.refs.email.value === ''){
            alert('FILL ALL INPUTS')
        }else{
            this.setState({
                newContact: {
                    id: uuid.v4(),
                    fname: this.refs.fname.value,
                    lname: this.refs.lname.value,
                    email: this.refs.email.value,
                    phoneNumber: this.refs.phoneNumber.value,
                    address:this.refs.address.value,
                    city: this.refs.city.value,
                    state:this.refs.state.value,
                    zipCode: this.refs.zipCode.value
                }
            },()=>{
                {this.props.addNewContact(this.state.newContact)}
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleAddContact.bind(this)}>
                    <div>
                        First Name: <input ref = "fname" type = "text"></input>
                        Last Name: <input ref = "lname" type = "text"></input> <br/>
                        E-Mail: <input ref = "email" type = "text"></input>
                        Phone Number: <input ref = "phoneNumber" type = "text"></input> <br/>
                        Address: <input ref = "address" type = "text"></input>
                        City: <input ref = "city" type = "text"></input>
                        State: <input ref = "state" type = "text"></input>
                        Zip Code: <input ref = "zipCode" type = "text"></input>

                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


AddContact.propTypes = {
    
};

export default AddContact
