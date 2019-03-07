import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList.jsx";
// import TodoItem from "./TodoItem.jsx";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

class App extends Component {
  state = {
    value: "",
    todos: todosList
  };
  ///Create ToDo///////
  handleCreateToDo = (e) => {
    if (e.key === "Enter" && this.state.value !== "") {
      const newTodos = this.state.todos.slice();
      newTodos.push({
        userId: 1,
        id: Math.ceil(Math.random() * 1000000),
        title: this.state.value,
        completed: false
      })
      this.setState({
        value: "",
        todos: newTodos,
      });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };
  ////Mark Checkbox Completed///
  handleMarkCompleted = (id) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({
      todos: newTodos
    });
  }
  ////Delete ToDo///////
  handleDestroyTodo = id => {
    const newTodos = this.state.todos
    this.setState({ todos: newTodos.filter(todo => todo.id !== id) })
  }
  ////Remove All Completed///////
  handleClearCompleted = () => {
    const newTodos = this.state.todos
    this.setState({
      todos: newTodos.filter(todo => todo.completed === false)
    })
  }
  render() {
    return (
      <Router>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onChange={this.handleInputChange}
              value={this.state.value}
              onKeyDown={this.handleCreateToDo}
            />
          </header>
          <Switch>
           
            <Route path='/active' render={() => (
              <TodoList todos={this.state.todos.filter(todo => todo.completed === false)}
                onClickCompleted={this.handleMarkCompleted}
                handleDestroyTodo={this.handleDestroyTodo}
                handleClearCompleted={this.handleClearCompleted} />
            )} />
            <Route path='/completed' render={() => (
              <TodoList todos={this.state.todos.filter(todo =>todo.completed === true)}
                onClickCompleted={this.handleMarkCompleted}
                handleDestroyTodo={this.handleDestroyTodo}
                handleClearCompleted={this.handleClearCompleted} />
            )} /> 
            <Route path='/' render={() => (
              <TodoList
                todos={this.state.todos}
                onClickCompleted={this.handleMarkCompleted}
                handleDestroyTodo={this.handleDestroyTodo}
                handleClearCompleted={this.handleClearCompleted} />
            )} />
          </Switch>
          <footer className="footer">
            <span className="todo-count">
              <strong>{this.state.todos.filter(todo => {
                if (todo.completed === false) {
                  return todo
                }
                return false
              }).length} </strong> item(s) left
          </span>
            <ul className="filters">
              <li>
                <NavLink exact to='/' activeClassName='selected'>All</NavLink>
              </li>
              <li>
                <NavLink exact to='/active' activeClassName='selected'>Active</NavLink>
              </li>
              <li>
                <NavLink exact to='/completed' activeClassName='selected'>Completed</NavLink>
              </li>
            </ul>
            <button className="clear-completed" onClick={this.handleClearCompleted}>Clear completed</button>
          </footer>
        </section>
      </Router>
    );
  }
}
export default App;