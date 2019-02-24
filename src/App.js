import React, { Component } from 'react';
import Form from './Form';
import Character from './Character';
import './App.css';


class App extends Component {
  state = {
    name: undefined,
    height: undefined,
    hair_color: undefined,
    eye_color: undefined,
    birth_year: undefined
  }

  getCharacter = async (e) => {
    e.preventDefault();
    let randNumber = Math.floor(Math.random() * 88) + 1  ;
    const api_call = await fetch(`https://swapi.co/api/people/${randNumber}`);
    const data = await api_call.json();
    this.setState({
      name: data.name,
      height: data.height,
      hair_color:data.hair_color,
      eye_color:data.eye_color,
      birth_year:data.birth_year
    });

  }
 
render() {
    return(
    <div className='tc'>
    <h1 className='f1'>Star Wars</h1>
    <h4>Click the button to find out about a Star Wars Character!</h4>
    <Form getCharacter={this.getCharacter}/>
    <Character 
       name={this.state.name}
       height={this.state.height}
       hair_color={this.state.hair_color}
       eye_color={this.state.eye_color}
       birth_year={this.state.birth_year}
    />
  </div>
  )};

}

export default App;
