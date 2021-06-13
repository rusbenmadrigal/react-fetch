import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import tasks from './sample/tasks.json';

/// Components
import Tasks from './components/task';
import TaskForm from './components/TaskForm';
import Posts from './components/posts'

class App extends Component {

state = {
  tasks: tasks
}

addTask = (title, description) => {
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTask})

  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task; 

    });
    this.setState({tasks: newTasks})


  }



  render() {
    return <div>
    <Router>
    <Route path="/" render={() => {
      <div>
        <TaskForm addTask={this.addTask}/>
      <Tasks 
      tasks={this.state.tasks} 
      deleteTask={this.deleteTask} 
      checkDone={this.checkDone}
      />
      </div>
    }}>
    </Route>
    <Route path="/posts" component={Posts}/>
    </Router>
      <Posts/>

    </div>
}
}

export default App;
