import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


class Edit extends React.Component{


    
    state={
        todoDescription:"",
        todoResponsible:"",
        todoPriority:"",
        todoCompleted:false,
        updated:false
        
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:4000/todos/${this.props.match.params.id}`)
                .then((res)=>{
                    this.setState({
                        todoDescription:res.data.todoDescription,
                        todoResponsible:res.data.todoResponsible,
                        todoPriority:res.data.todoPriority,
                        todoCompleted:res.data.todoCompleted
                    })

                }).catch(err=>console.log(err))

    }


    onFormSubmit=(e)=>{
        e.preventDefault();

        let newItem = {
            todoDescription:this.state.todoDescription,
            todoResponsible:this.state.todoResponsible,
            todoPriority:this.state.todoPriority,
            todoCompleted:this.state.todoCompleted
        }

        axios.put(`http://localhost:4000/todos/update/${this.props.match.params.id}`, newItem)
            .then(res=>{
                    console.log(res.data)
            }).catch(err=>console.log(err));
        
       this.setState({
        updated:true


       })
    }

    onChangeDescription=(e)=>{

        this.setState({
            todoDescription:e.target.value
        })

    }

    onChangeResponsible=(e)=>{
        this.setState({
            todoResponsible:e.target.value
        })

    }

    onChangeTodoPri=(e)=>{

        this.setState({
            todoPriority:e.target.value
        })
    }

    onChangeCompleted=(e)=>{

        this.setState({
            todoCompleted:!this.state.todoCompleted
        })

    }


    render(){



        return(
            <div>
               {
                   (this.state.updated) ? <div>Updated<NavLink to="/">Back</NavLink></div> : <div>
                        <h3>Update Todo</h3>
                       <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label> Description</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.todoDescription}
                        onChange={this.onChangeDescription}/>

                        <label> Responsible</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.todoResponsible}
                        onChange={this.onChangeResponsible}/>

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

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"
                            id="completedCheckbox"
                            name="completedCheckbox"
                            onChange={this.onChangeCompleted}
                            checked={this.state.todoCompleted}
                            value={this.state.todoCompleted}/>
                            <label htmlFor="completedCheckbox">Completed</label>
                        </div>
                        <br/>

                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="updated todo"/>
                        </div>

                    </div>
                </form></div>

                   
                   
                   
                   
                   
                   
                   
                   
                   
               }

                
                
            </div>
        )
    }
}

export default Edit;