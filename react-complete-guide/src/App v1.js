import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: 'Johnatan', age: 50},
      { name: 'Carlos', age: 51},
      { name: 'Jorge', age: 52},
    ]
  };

  switchNameHandler = (newName) => {
    console.log('Brus?');
    //Don't do this: this.state.persons[0].name = 'Lee';
    this.setState({
      persons:[
        { name: 'Johnatan Alexis Urbano Guzmán', age: 50},
        { name: newName, age: 51},
        { name: 'Jorge', age: 52},
      ]
    });
  }

  nameChangeHandler = (event) => {
    console.log('Brus?');
    //Don't do this: this.state.persons[0].name = 'Lee';
    this.setState({
      persons:[
        { name: 'Johnatan Alexis Urbano Guzmán', age: 50},
        { name: event.target.value, age: 51},
        { name: 'Jorge', age: 52},
      ]
    });
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
          onClick={() => this.switchNameHandler('Carlitos el buhito')}
        >Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>Mi hobbies bullying</Person>
      </div>
    );
  }
}

export default App;
