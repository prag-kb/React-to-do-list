import React, { Component } from 'react'
import TodoList from '../../atom/todoList/todoList'

export default class Todos extends Component {
    render() {
        return (
            <div>
                {this.props.myTodo.map((element) => (
                    <TodoList
                        deleteHandler={this.props.deleteHandler}
                        editHandler={this.props.editHandler}
                        todo={element.todo}
                        key={element.id}
                        id={element.id} />
                ))}
            </div>
        )
    }
}
