import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.id}
                    {this.props.todo}
                </span>
                <input
                    type='checkbox' />
                <button
                    onClick={() => this.props.editHandler(this.props.id)}
                >Edit</button>
                <button
                    onClick={() => this.props.deleteHandler(this.props.id)}
                >Delete</button>
            </div>
        )
    }
}

