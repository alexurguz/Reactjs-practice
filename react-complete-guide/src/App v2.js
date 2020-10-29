import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { id: '1a', name: 'Johnatan', age: 50},
      { id: '1b', name: 'Carlos', age: 51},
      { id: '1c', name: 'Jorge', age: 52},
    ]
  };

  deletePersonHandler = (personIndex) => {
    console.log('******Delete******');
    //©.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    console.log('******Changed******');
    //Don't do this: this.state.persons[0].name = 'Lee';
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    //Inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
                return <Person 
                          name={person.name} 
                          age={person.age} 
                          click={() => this.deletePersonHandler(index)}
                          key={person.id}
                          changed={(event) => this.nameChangeHandler(event, person.id)}>Mi hobbies bullying</Person>
              }
            )
          }
        </div>
      );
    }
    return (
      //https://reactjs.org/docs/events.html#form-events
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch name</button>
          {persons}
      </div>
    );
  }
}

export default App;
