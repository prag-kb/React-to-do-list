import React, { Component } from 'react'

class NewTodo extends Component {
    render() {
        return (
            <div>
                <input
                    type='text'
                    name='todo name'
                    placeholder='Type here'
                    onChange={this.props.onChangeHandler}
                    value={this.props.state.myInputValue}
                     /> 
                
                <button
                    onClick={this.props.onSubmitHandler}
                > + </button>
            </div>
        )
    }
}


export default NewTodo;