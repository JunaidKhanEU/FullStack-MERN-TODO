
import React from 'react';
import {NavLink} from 'react-router-dom';
class todo extends React.Component{


    render(){
        const {todoCompleted} =this.props.todo
        return(
                <tr>
                    <td className={(todoCompleted) ? "completed" : ""}>{this.props.todo.todoDescription}</td>
                    <td className={(todoCompleted) ? "completed" : ""}>{this.props.todo.todoResponsible}</td>
                    <td className={(todoCompleted) ? "completed" : ""}>{this.props.todo.todoPriority}</td>
                    <td className={(todoCompleted) ? "completed" : ""}>{this.props.todo.todoPriority}</td>
                    <td>
                       <NavLink to={`/edit/${this.props.todo._id}`}>Edit</NavLink> 
                    </td>

                </tr>
        )
    }



}

export default todo;