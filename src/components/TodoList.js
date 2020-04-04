import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.createTodo = this.createTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    createTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    updateTodo(id, updatedTask) {
        this.setState({ todos: this.state.todos.map(todo => todo.id === id ? {...todo, task: updatedTask} : todo) });
    }

    toggleCompletion(id) {
        this.setState({ todos: this.state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo) });
    }

    deleteTodo(id) {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    }

    render() {
        return(
            <div className="TodoList">
                <h1>Todo App</h1>  
                {this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} updateTodo={this.updateTodo} toggleCompletion={this.toggleCompletion} deleteTodo={this.deleteTodo} />)}
                <NewTodoForm createTodo={this.createTodo} />
            </div>

        )
    }
}

export default TodoList;