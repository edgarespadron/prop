import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      jane: {
        firstname: "Jane",
        lastname: "Doe",
        age: 45,
        haircolor: "black"
      },
      john: {
        firstname: "John",
        lastname: "Smith",
        age: 88,
        haircolor: "Brown"
      },
      millard: {
        firstname: "Millard",
        lastname: "Filmore",
        age: 50,
        haircolor: "Brown"
      },
      maria: {
      firstname: "Maria",
      lastname: "Smith",
      age: 62,
      haircolor: "Brown"
      },
    }
  }
  render(){
    return(
      <div className="d-flex justify-content-around">
        <PersonCard
        person= {this.state.jane} 
        />
        <PersonCard
        person= {this.state.john} 
        />
        <PersonCard
        person= {this.state.millard} 
        />
        <PersonCard
        person= {this.state.maria} 
        />

      </div>
    );
  }

}


export default App;
