// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.tasks.map(tasks => (
                <Task 
                key={tasks.id} 
                tasks={tasks} 
                toggleTask={props.toggleTask} />
            ))}
            <button onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;