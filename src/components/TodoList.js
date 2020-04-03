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
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    createTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    editTodo(todoId, editedTask) {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === todoId) {
                todo.task = editedTask;
            }
            return todo;
        })})
    }

    deleteTodo(id) {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    }

    render() {
        return(
            <div className="TodoList">
                <h1>Todo App</h1>  
                {this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} task={todo.task} editTodo={(editedTask) => this.editTodo(todo.id, editedTask)} deleteTodo={this.deleteTodo} />)}
                <NewTodoForm createTodo={this.createTodo} />
            </div>

        )
    }
}

export default TodoList;