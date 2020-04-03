import React, { Component } from 'react';

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
        this.props.createNewTodo(this.state);
        this.setState({ task: "" });
    }

    render() {
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="newTask"></label>
                <input id="task" name="task" value={this.state.task} onChange={this.handleChange} />
                <button>Save</button>
            </form>
        )
    }
}

export default NewTodoForm;