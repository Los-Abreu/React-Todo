import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  // {
  //   task: 'Wash Hands',
  //   id: Date.now(),
  //   completed: false
  // },
  // {
  //   task: 'Wash Clothes',
  //   id: Date.now(),
  //   completed:false
  // },
  // {
  //   task: 'Sanitize Everything',
  //   id: Date.now(),
  //   completed:false
  // }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = (e, todo) => {
    const newTask = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTask = taskId => {
    console.log(taskId);
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (taskId === tasks.id) {
          return {
            ...tasks,
            completed: !tasks.completed
          };
        }
        return tasks;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(todo => {
        return !tasks.completed;
      })
    });
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
        <h2>Welcome to your Todo list!</h2>
        <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}
        clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
