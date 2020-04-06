import React from 'react';

const tasks = props => {
    return (
        <div
            className={`tasks${props.tasks.completed ? 'completed' : ''}`}
            onClick={e => props.toggleTask(props.tasks.id)}>
                <p>{props.tasks.task}</p>
            </div>
    )
}

export default tasks;