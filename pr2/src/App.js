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

  deletePerson = (index) => {
    let persons = this.state.persons;
    persons.splice(index, 1);

    this.setState({
      persons: persons
    });
  }

  changeName = (event) => {
    this.setState({
      persons:
      [
        {name: event.target.value, age: 22, id: 1},
        {name: "Peter", age: 19, id: 2},
        {name: "Peer", age: 24, id: 3}
      ]
    })
  }

  personify = (person, index) => {
    return <Person key={person.id} name={person.name} age={person.age} click={() => this.deletePerson(index)/*this.deletePerson.bind(this, person.name)*/} changeName={this.changeName}/>;
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

    let persons = null;

    if(this.state.showPerson){
      persons = (
        this.state.persons.map(this.personify)
      );
    }

    return (
      <div className="App">
        <h1>Hallo there, look at sese persons pls!</h1>
        <p>Counter: {this.state.counter}</p>
        <button style={style} onClick={this.clickMe}>Klick mi!</button>
        <p>Show Persons: </p>
        <button className="button-cstm" onClick={this.togglePersons}>Toggle Persons</button>
        <div>
          {persons}
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hallo there, this is me, Hans!'));
  }
}

export default App;
