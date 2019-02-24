import React from 'react';
import axios from 'axios';

class Create extends React.Component{

    state={
        todoDescription:"",
        todoResponsible:"",
        todoPriority:"",
        todoCompleted:false
    }

    onChangeTodoDes=(e)=>{

        this.setState({
            todoDescription:e.target.value
        })

    }

    onChangeTodoRes=(e)=>{

        this.setState({
            todoResponsible:e.target.value
        })

    }

    onChangeTodoPri=(e)=>{

        this.setState({
            todoPriority:e.target.value
        })

    }
  
    onSubmit= (e)=>{
        e.preventDefault();



        const newTodo={
            todoDescription:this.state.todoDescription,
            todoResponsible:this.state.todoResponsible,
            todoPriority:this.state.todoPriority,
            todoCompleted:this.state.todoCompleted
        } 

    
        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res=>{
                console.log(res.data);
            })

        this.setState({
        todoDescription:"",
        todoResponsible:"",
        todoPriority:"",
        todoCompleted:false

        })
    }




    render(){
        return(
            <div style={{marginTop:20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control"
                        value={this.state.todoDescription}
                        onChange={this.onChangeTodoDes}/>

                    </div>


                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text" className="form-control"
                        value={this.state.todoResponsible}
                        onChange={this.onChangeTodoRes}/>

                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={this.state.todoPriority === "Low"}
                            onChange={this.onChangeTodoPri}/>
                            <label className="form-check-label" htmlFor="priorityLow">Low</label>
                        </div>


                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={this.state.todoPriority === "Medium"}
                            onChange={this.onChangeTodoPri}/>
                            <label className="form-check-label" htmlFor="priorityMedium">Medium</label>
                        </div>



                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={this.state.todoPriority === "High"}
                            onChange={this.onChangeTodoPri}/>
                            <label className="form-check-label" htmlFor="priorityHigh">High</label>
                        </div>


                    </div>

                    <div className="form-group">
                        <input type="submit" value="create-todo" className="btn btn-primary"/>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Create;