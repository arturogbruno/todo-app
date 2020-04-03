import React from 'react';

const Todo = (props) => {
    return(
        <div className="Todo">
            <span>{props.task}</span>
            <button>X</button>
        </div>
    )
}

export default Todo;