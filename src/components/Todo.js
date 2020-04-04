import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
            isEditing: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.toggleEditForm = this.toggleEditForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    toggleEditForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }

    handleToggle(e) {
        this.props.toggleCompletion(this.props.id);
    }

    handleDelete() {
        this.props.deleteTodo(this.props.id);
    }

    render() {
        return(
            this.state.isEditing ? (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input name="task" value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            ) : (
                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleEditForm}><i className="fas fa-pen"></i></button>
                        <button onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            )
            
        )
    }
}

export default Todo;