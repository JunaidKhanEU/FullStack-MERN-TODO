import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import TodoList from './components/TodoList';
import EditTodo from './components/Edit';
import CreateTodo from './components/Create';
import spinner from './spinner.png';
 
class App extends Component {
  render() {
    return (
      
      <div>

      <div className="container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="http://google.com" className="navbar-brand" target="_blank" rel="noopener noreferrer">
        <img src={spinner} alt="logo" width="30px" height="30px"/>
        </a>

        <NavLink to="/" className="navbar-brand">MERN - TODO APP</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink to="/" className="nav-link">Todos</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/create" className="nav-link">Create Todo</NavLink>
            </li>
          </ul>
        </div>
      </nav>



       
      </div>


      <Route exact path="/" component={TodoList}/>
      <Route exact path="/edit/:id" component={EditTodo}/>
      <Route exact path="/create" component={CreateTodo}/>

      </div>
     
    );
  }
}

export default App;
