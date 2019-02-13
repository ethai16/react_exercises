import React, { Component } from 'react';
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import uuid from 'uuid'

class App extends Component {

  componentWillMount(){
    this.setState({
      contacts: [{
        id: uuid.v4(),
        fname: 'Erick',
        lname: 'Thai',
        email: 'erickthai@email.com',
        phoneNumber: '1231231234',
        address:'123 Fake St.',
        city: 'Houston',
        state: 'TX',
        zipCode: '12345'
      },
      {
        id:uuid.v4(),
        fname: 'Anuj',
        lname: 'Saheba',
        email: 'anujsaheba@email.com',
        phoneNumber: '1231231234',
        address:'123 Fake St.',
        city: 'Houston',
        state: 'TX',
        zipCode: '12345'
      }]
    })
  }

  addNewContact(contact){
    let newContact = this.state.contacts;
    newContact.push(contact);
    this.setState({contacts: newContact})
  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id)
    contacts.splice(index, 1)
    this.setState({contacts: contacts})
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        <AddContact addNewContact = {this.addNewContact.bind(this)} />
        <Contacts allContacts = {this.state.contacts} deleteContact = {this.handleDeleteContact.bind(this)}/>
      </div>
    );
  }
}

export default App;
