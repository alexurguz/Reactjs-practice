import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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
      backgroundColor: 'green',
      color: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    //let classes = ['red','bold'].join(' ');
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red'];
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold'];
    }

    return (
      //https://reactjs.org/docs/events.html#form-events
      <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>Switch name</button>
            {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
