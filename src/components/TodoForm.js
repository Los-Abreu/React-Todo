import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            taskName: ''
        };
    }
    
    handleChanges = e => {
        this.setState({ taskName: e.target.value});
    };

    submitTask = e => {
        e.preventDefault();
        // this.setState({ item: '' });
        this.props.addTask(this.state.taskName);
    };

    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    value={this.state.taskName}
                    name='task'
                    onChange={this.handleChanges}
            />
            <button>Add todo</button>
            </form>
        )
    }
}

export default TodoForm;

