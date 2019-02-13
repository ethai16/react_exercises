import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem'

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        
    }

    deleteContact(id){
        {this.props.deleteContact(id)}
    }

    render() {
        let listContacts;
        listContacts = this.props.allContacts.map(contact => {
            return <ContactItem key = {contact.id} contact = {contact} deleteContact = {this.deleteContact.bind(this)}/>
        })

        return (
            <div>
                {listContacts}
            </div>
        );
    }
}


Contacts.propTypes = {
    
};

export default Contacts
