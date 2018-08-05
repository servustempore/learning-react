import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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

  personify = (person, index) => {
    return 
      <Person key={person.id}
        name={person.name} 
        age={person.age} 
        click={() => this.deletePerson(index)/*this.deletePerson.bind(this, person.name)*/} 
        changeName={(event) => this.changeName(event, person.id)}
      />;
  }

  togglePersons = () => {
    const showPersons = this.state.showPerson;
    this.setState({showPerson: !showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPerson){
      persons = (
        this.state.persons.map(this.personify)
      );

      style.backgroundColor = 'red';
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hallo there, look at sese persons pls!</h1>
        <p className={assignedClasses.join(' ')}>Hmm assignedClasses</p>
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
