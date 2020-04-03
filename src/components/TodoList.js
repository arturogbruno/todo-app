import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { task: "feed the cat", id: uuidv4() }, { task: "walk the dog", id: uuidv4() }
            ]
        }

        this.createNewTodo = this.createNewTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    createNewTodo(newTask) {
        let newTodo = {...newTask, id: uuidv4() };
        this.setState(st => ({ todos: [...st.todos, newTodo] }));
    }

    editTodo(todoId, editedTask) {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === todoId) {
                todo.task = editedTask;
            }
            return todo;
        })})
    }

    deleteTodo(todoId) {
        this.setState(st => ({ todos: st.todos.filter(todo => todo.id !== todoId) }));
    }

    render() {
        return(
            <div className="TodoList">
                <h1>Todo List</h1>
                {this.state.todos.map(todo => <Todo key={todo.id} task={todo.task} editTodo={(editedTask) => this.editTodo(todo.id, editedTask)} deleteTodo={() => this.deleteTodo(todo.id)} />)}
                <NewTodoForm createNewTodo={this.createNewTodo} />
            </div>

        )
    }
}

export default TodoList;