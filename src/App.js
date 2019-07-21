import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'sdfs', name:'Manu', age: 27 },
      {id:'erga', name:'Marina', age: 21 },
      {id:'bgbg', name:'Siki', age: 37 }
    ],
    showPersons: false
  }

  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( { persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow });
  }

  deletePersonHandler = (personsIndex) => {
    //const persons = this.state.persons.slice(); // slice without arguments returns copy of persons and then manipulation begins
    const persons = [...this.state.persons]; //same effect as above
    persons.splice(personsIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click ={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            change={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
    };

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}>Swith name</button>
        {persons}
      </div>
    );
  }
}

export default App;
