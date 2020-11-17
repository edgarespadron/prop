import React,  { Component } from 'react';


export default class PersonCard extends Component{
    
   constructor(props){
        super(props);
        this.state = {
            age : this.props.person.age
        }
    }
    render(){
        return(
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{this.props.person.firstname}</h4>
                <h4 className="card-title">{this.props.person.lastname}</h4>
                <p className="card-text">age: {this.state.age} </p>
                <p className="card-text">hair color: {this.props.person.haircolor} </p>
                <div className="d-flex justify-content-around">
                    <button 
                    className="btn btn-danger"
                    onClick={() =>{
                    this.setState({age: this.state.age +1 });
                    }}>
                    birthday button for {this.props.person.firstname}
                    </button>
                </div>
            </div>
        </div>
        )
    }
}