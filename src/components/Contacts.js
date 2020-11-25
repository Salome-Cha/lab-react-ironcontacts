import React from 'react';
import contacts from '../contacts.json'
import './Contacts.css';


class Contacts extends React.Component {

    state = {
        contacts: contacts.splice(0, 5)
      }
    

    addContactHandler = ()  => {
        const randomContactIndex = Math.floor(Math.random() * contacts.length);
        const randomContact = contacts[randomContactIndex];
        const contactSelectCopy = this.state.contacts.concat(randomContact)
            this.setState ({
            contacts: contactSelectCopy,
        })
    }
    
    sortNameHandler = () => {
        const sortedByName = this.state.contacts.sort((a, b) => {
            return  a.name < b.name ? -1 : 1;
        })

        this.setState({
            contacts: sortedByName,
        })
    }

    sortPopularityHandler = () => {
        const sortedByPopularity = this.state.contacts.sort((a, b) => b.popularity - a.popularity)

        this.setState({
            contacts: sortedByPopularity,
        })
    }

    deletingHandler = (id) => {
            const contactsCopy = [...this.state.contacts];
            const contactToRemoveIndex = contactsCopy.findIndex((contactToRemove) => {return contactToRemove.id === id})
            console.log(contactToRemoveIndex)
            contactsCopy.splice(contactToRemoveIndex, 1)
            
            this.setState ({
                contacts: contactsCopy
            });
        }
    

    render() {
    
    return (
        <div>
     
        <button className='btn btn-secondary'  onClick={this.addContactHandler}> Add contact</button>
        <button className="btn btn-info" onClick={this.sortNameHandler}> Sort by Name</button>
        <button className="btn btn-dark" onClick={this.sortPopularityHandler}> Sort by Popularity</button>

        <table class="table">
            <thead>
            <tr className="first-row">
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            

    {this.state.contacts.map((contact ) => {
          return (
            <tr key={contact.id}>
              <td>{<img className="portrait" src={contact.pictureUrl}/>}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>  <button className="btn btn-warning" onClick={() => this.deletingHandler(contact.id)}> Delete </button> </td>
            </tr>
          );
        })}

        
            </tbody> 
        </table>
        </div>
    )
}
}

export default Contacts;

