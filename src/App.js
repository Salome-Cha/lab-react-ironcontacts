import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';


class App extends React.Component {



render() {
  return (
    <div className="App">
      <h2>IronContacts</h2>
        <Contacts />
    </div>
  );
}
}

export default App;
