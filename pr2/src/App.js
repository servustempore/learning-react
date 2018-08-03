import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    counter: 0,
    persons: [
      {name: "Hans", age: 22},
      {name: "Peter", age: 19},
      {name: "Peer", age: 24}
    ]
  };

  personify = person => {
    return <Person name={person.name} age={person.age} />;
  }

  clickMe = () => {
    console.log("Clicked!");
  }

  render() {
    return (
      <div className="App">
        <h1>Hallo there, look at sese persons pls!</h1>
        <button onClick={this.clickMe}>Klick mi!</button>
        {this.state.persons.map(this.personify)}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hallo there, this is me, Hans!'));
  }
}

export default App;
