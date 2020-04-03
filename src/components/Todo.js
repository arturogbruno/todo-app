import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
            isEditing: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.edit = this.edit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(e) {
        this.setState({ task: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.editTodo(this.state.task);
        this.setState({ isEditing: false });
    }

    edit() {
        this.setState({ isEditing: true });
    }

    handleDelete() {
        this.props.deleteTodo(this.props.id);
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
                <ul className="Todo">
                    <li>{this.props.task}</li>
                    <button onClick={this.edit}>Edit</button>
                    <button onClick={this.handleDelete}>X</button>
                </ul>
            )
            
        )
    } 
}

export default Todo;