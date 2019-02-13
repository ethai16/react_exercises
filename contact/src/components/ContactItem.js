import React from 'react';
import PropTypes from 'prop-types';

class ContactItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    deleteContact(id){
        this.props.deleteContact(id)
    }

    render() {
        return (
            <div>
                {this.props.contact.fname} {' '} {this.props.contact.lname} {':'} {this.props.contact.email}
                {this.props.contact.phoneNumber}{this.props.contact.email}{this.props.contact.email}
                <a href="#" onClick={this.deleteContact.bind(this, this.props.contact.id)}>X</a>
            </div>
        );
    }
}


ContactItem.propTypes = {
    
};

export default ContactItem
