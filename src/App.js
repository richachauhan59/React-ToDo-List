import React from 'react';
import logo from './logo.svg';
import ToDo from './components/input'



export default class App extends React.Component {
  constructor(props){
    super(props)
   
    }
    
  render(){
    return (
      <div className="App">
       <ToDo/>
      </div>
    );
  }
  
  
}