import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Manu', age: 27 },
      {name:'Marina', age: 21 },
      {name:'Siki', age: 37 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name:newName, age: 27 },
        {name:'Marina', age: 21 },
        {name:'Piki', age: 30 }
      ]

    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name:'Tramp', age: 27 },
        {name:event.target.value, age: 21 },
        {name:'Piki', age: 30 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow });
  }

  

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            change={this.nameChangeHandler}
            click ={this.switchNameHandler.bind(this, 'Petar')} /*added property click that references to method*/>Moji hobiji: spavanje</Person> 
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
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
