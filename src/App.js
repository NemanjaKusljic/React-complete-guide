import React, { Component } from 'react';
import classes from './App.css';
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

    /*const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      /*cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'yellow'
      } radium fazon
    };*/

    let persons = null;
    let btnClass = '';

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

      /*style[':hover'] = {
        backgroundColor: 'pink',
        color: 'white'
      }*/ // radium fazon

      btnClass = classes.Red;
    };
    
    let assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button 
        className={btnClass}
        onClick={this.togglePersonsHandler}>Swith name</button>
        {persons}
      </div>
    );
  }
}

export default App;
