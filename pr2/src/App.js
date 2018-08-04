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
    ],
    showPerson: true
  };

  clickMe = () => {
    let counter = this.state.counter;
    counter++;
    this.setState({counter: counter});
  }

  clickPerson = (name) => {
    this.setState({
      persons:
      [
        {name: name, age: 22},
        {name: "Peter", age: 19},
        {name: "Peer", age: 24}
      ]
    })
  }

  changeName = (event) => {
    this.setState({
      persons:
      [
        {name: event.target.value, age: 22},
        {name: "Peter", age: 19},
        {name: "Peer", age: 24}
      ]
    })
  }

  personify = person => {
    return <Person name={person.name} age={person.age} click={this.clickPerson.bind(this, person.name)} changeName={this.changeName}/>;
  }

  togglePersons = () => {
    const showPersons = this.state.showPerson;
    this.setState({showPerson: !showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hallo there, look at sese persons pls!</h1>
        <p>Counter: {this.state.counter}</p>
        <button style={style} onClick={this.clickMe}>Klick mi!</button>
        <p>Show Persons: </p>
        <button className="button-cstm" onClick={this.togglePersons}>Toggle Persons</button>
        { this.state.showPerson ?
          this.state.persons.map(this.personify) :
          null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hallo there, this is me, Hans!'));
  }
}

export default App;
