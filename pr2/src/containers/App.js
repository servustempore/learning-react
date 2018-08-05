import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    counter: 0,
    persons: [
      {id: 1, name: "Hans", age: 22},
      {id: 2, name: "Peter", age: 19},
      {id: 3, name: "Peer", age: 24}
    ],
    showPerson: true
  };

  clickMe = () => {
    let counter = this.state.counter;
    counter++;
    this.setState({counter: counter});
  }

  deletePerson = (index) => {
    // const persons = this.state.persons.splice() // unmodern way of copying an array
    const persons = [...this.state.persons]; // you have to copy the array, otherwise we get a pinter to the state variable
    persons.splice(index, 1); // which would automatically change the state by just applying this command

    this.setState({
      persons: persons
    });
  }

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    /* 
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person; */

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({
      persons: persons
    })
  }

  togglePersons = () => {
    const showPersons = this.state.showPerson;
    this.setState({showPerson: !showPersons});
  }

  render() {


    let persons = null;

    if(this.state.showPerson){
      persons = (
      <div>
        <Persons 
        persons={this.state.persons} 
        click={this.deletePerson}
        changeName={this.changeName}
        />
      </div>
      );
    }



    return (
      <div className={classes.App}>
      <h1>{this.props.smth}</h1>
      <Cockpit 
      persons={this.state.persons} 
      showPersons={this.state.showPerson} 
      counter={this.state.counter} 
      clickMe={this.clickMe} 
      togglePersons={this.togglePersons}
      />
      {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hallo there, this is me, Hans!'));
  }
}

export default App;
