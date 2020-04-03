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
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    createNewTodo(newTask) {
        let newTodo = {...newTask, id: uuidv4() };
        this.setState(st => ({ todos: [...st.todos, newTodo] }));
    }

    deleteTodo(todoId) {
        this.setState(st => ({ todos: st.todos.filter(todo => todo.id !== todoId) }));
    }

    render() {
        return(
            <div className="TodoList">
                <h1>Todo List</h1>
                {this.state.todos.map(todo => <Todo key={todo.id} task={todo.task} deleteTodo={() => this.deleteTodo(todo.id)} />)}
                <NewTodoForm createNewTodo={this.createNewTodo} />
            </div>

        )
    }
}

export default TodoList;