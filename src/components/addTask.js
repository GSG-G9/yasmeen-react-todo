import React from 'react'

import '../App.css'
class AddTask extends React.Component {
    state = {
        task :''
        
    }
    handleTask = (event)=>{
      
    this.setState({task : event.target.value})
    }
     handleSubmit = (event)=>{
      event.preventDefault();
     this.props.AddTask(this.state.task);
     this.setState({task:''})
           }
        render(){
         const {task} = this.state
                        return (
          <div className = 'add-task' >
            <form>
                <input type='input' name = 'task' id='addTask' placeholder=' whats in your mind ' value={task}  onChange={this.handleTask} />
                <input type='submit' value='Add'  onClick={this.handleSubmit} />
                </form>    
                <div>
                <ul className='todo-list' >
                {this.props.todo.map((task,index)=><li key ={index} className='todo-list-item' >{task}</li>)}                
                                
                </ul>
                </div> 
          </div>
        );
    }
}

 export default AddTask;