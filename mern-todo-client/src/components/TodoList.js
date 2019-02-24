import React from 'react';
import Todo from './Todo';
import axios from 'axios';


class TodoList extends React.Component{

    state={
        todos:[],
        updated:false
    }

    componentDidMount(){

        this.getData();

        }

    getData=()=>{
        axios.get('http://localhost:4000/todos')
        .then((res)=>{
            console.log(res.data);
            this.setState({
                todos:res.data   
            })
        }).catch(err=>console.log(err))
    }

    componentDidUpdate(){
       
    }

    todoListRender=()=>{

        return this.state.todos.map((item, index)=>{

            return(
                <Todo todo={item}
                key={index}/>
            )

        })

    }



    render(){
        return(
           
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.todoListRender()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList;