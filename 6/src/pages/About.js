import React from 'react';
import Task from '../components/Task';
import TaskInput from '../components/TaskInput';

const url = 'https://reqres.in/api/users?per_page=12';

export class About extends React.Component {
  constructor(){
    super()
      this.state = {
        tasks: [],
      }
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            tasks: result.data
          })
          
        },
        error => {
          console.log(error);
        }
      )
  }

  addTask = task => {
    this.setState(state => {
      let {tasks} = state;
      const freshTasks = [...tasks];
      freshTasks.push({
        id:Date.parse(new Date()),
        first_name: task,
      });
      return {tasks: freshTasks};
    }); 
  };

  deleteTask = id => {
    this.setState(state => {
      let {tasks} = state;
      const freshTasks = tasks.filter(task => task.id !== id);
      return {tasks: freshTasks}; 
    })
  }

  render(){
    const { tasks } = this.state;

    return (
      <div className="App">

        <TaskInput 
          addTask={this.addTask}
        />

        {tasks.map(task => ( 

          <Task 
            task={task}
            deleteTask={this.deleteTask}
            key={task.id}
          />

        ))} 

      </div> 
    );
  }
}


  

  
