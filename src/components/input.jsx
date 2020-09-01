import React from 'react';
import './Input.css'
import ListItems from './ListItem'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


library.add(faTrash)

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items:[],
      currentItems:{
        text:"",
        key:""
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItems:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItems;
    if(newItem.text !== ""){
        const newItems = [...this.state.items, newItem]
        this.setState({
            items: newItems,
            currentItems: {
                text: "",
                key : ""
            }
        })
    }
    console.log(newItem)
  }

  deleteItem = (key) => {
    const filterItem = this.state.items.filter(item =>
        item.key !== key);
        this.setState({
            items : filterItem
        })

  }

  EditItem = (text, key) => {
    const Items = this.state.items
    Items.map(item => {
        if(item.key === key){
            item.text = text
        }
    })
    this.setState({
        items:Items
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
         <form id="to-do-form" onSubmit={this.addItem}>
           <input 
           onChange={this.handleInput}
           value={this.state.currentItems.value} 
           type='text' 
           placeholder="enter to do"
           />
           <button type='submit'>Add</button>
         </form>

        </header>
        <ListItems 
        deleteItem= {this.deleteItem}
        items={this.state.items} 
        EditItem={this.EditItem}
        />
      </div>
    );
  }
  
  }