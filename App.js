import './App.css';
import React, { Component } from 'react'
import NewTodo from './molecule/newTodo/newTodo';
import Todos from './molecule/todos/todos';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myInputValue: '',
      myTodo: [],
    }
  }


  onChangeHandler = (e) => {
    this.setState({
      myInputValue: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    this.setState({
      myTodo: [...this.state.myTodo, {
        id: Date.now(' '),
        todo: this.state.myInputValue
      }],
      myInputValue: ''
    }
    )
  }

  editHandler = (id) => {
    let result = this.state.myTodo.filter((el) => {
      return el.id !== id
    })
    let resultId = this.state.myTodo.find((el) => {
      return (el.id === id)
    })
    console.log(resultId)
    this.setState({
      myInputValue: resultId.todo,
      myTodo: result
    })
  }

  deleteHandler = (id) => {
    this.setState({
      myTodo: this.state.myTodo.filter((el) => {
        return el.id !== id
      })
    })
    console.log(this.state)
  }


  render() {
    return (
      <div className='app'>
        <NewTodo
          onSubmitHandler={this.onSubmitHandler}
          onChangeHandler={this.onChangeHandler}
          state={this.state} />

        <Todos
          inputValue={this.state.myInputValue}
          myTodo={this.state.myTodo}
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler} />
      </div>
    )
  }
}

export default App;


