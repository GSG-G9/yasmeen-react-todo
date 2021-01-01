import React from 'react'
import Header from './components/header'
import AddTask from './components/addTask'
import './App.css'
class App extends React.Component{
  state={
    tasks:['Happy new year']
  }
 
  AddTask = (task)=>{
    const {tasks} = this.state
    tasks.push(task)
    this.setState({tasks:tasks })
    return tasks
  }
  render(){
    return (
      <div className="App">
         <Header />
         <AddTask AddTask = {this.AddTask} todo = {this.state.tasks}/>
      </div>
    );
  }
  
}

export default App;
     