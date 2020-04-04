import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed: false });
        this.setState({ task: "" });
    }

    render() {
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="newTask">New todo</label>
                <input type="text" id="task" name="task" placeholder="New todo" value={this.state.task} onChange={this.handleChange} />
                <button>Add todo</button>
            </form>
        )
    }
}

export default NewTodoForm;