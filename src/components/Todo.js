import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
            isEditing: false
        }
        
        this.edit = this.edit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    edit() {
        this.setState({ isEditing: true });
    }

    handleChange(e) {
        this.setState({ task: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.editTodo(this.state.task);
        this.setState({ isEditing: false });
    }

    render() {
        return(
            this.state.isEditing ? (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newTask"></label>
                    <input id="task" name="task" value={this.state.task} onChange={this.handleChange} />
                    <button>Save</button>
                </form>
            ) : (
                <div className="Todo">
                    <span>{this.props.task}</span>
                    <button onClick={this.edit}>Edit</button>
                    <button onClick={this.props.deleteTodo}>X</button>
                </div>
            )
            
        )
    } 
}

export default Todo;