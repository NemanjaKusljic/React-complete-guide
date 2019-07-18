import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Manu', age: 27 },
      {name:'Marina', age: 21 },
      {name:'Siki', age: 37 }
    ]
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

  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler('Maxim')}>Swith name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click ={this.switchNameHandler.bind(this, 'Petar')} /*added property click that references to method*/>Moji hobiji: spavanje</Person> 
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
