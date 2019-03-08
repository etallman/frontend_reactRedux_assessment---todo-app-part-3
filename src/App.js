import React, { Component } from "react";
import "./index.css";
import TodoList from "./TodoList.jsx";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { clearCompletedTodos, addTodo } from "./actions.js"

class App extends Component {
  state = {
    value: "",
  };
  ///Create ToDo///////
  addTodo = (e) => {
    if (e.key === "Enter" && this.state.value !== "") {
      console.log(this.state.value)
      this.props.addTodo(this.state.value)
      e.target.value = ""
    }
  }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  // }
  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };
  ////Mark Checkbox Completed///
  // handleMarkCompleted = (id) => {
  //   const newTodos = this.state.todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   })
  //   this.setState({
  //     todos: newTodos
  //   });
  // }
  ////Delete ToDo///////
  // handleDestroyTodo = id => {
  //   const newTodos = this.state.todos
  //   this.setState({ todos: newTodos.filter(todo => todo.id !== id) })
  // }
  ////Remove All Completed///////
  // clearCompletedTodos = () => {
  //   const newTodos = this.state.todos
  //   this.setState({
  //     todos: newTodos.filter(todo => todo.completed === false)
  //   })
  // }

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
              onKeyDown={this.addTodo}
            />
          </header>
          <Switch>
            <Route path='/active' render={() => (
              <TodoList todos={this.props.todos.filter(todo => todo.completed === false)}
              // handleClearCompleted={this.clearCompletedTodos} 
              />
            )} />
            <Route path='/completed' render={() => (
              <TodoList todos={this.props.todos.filter(todo => todo.completed === true)}
              // handleClearCompleted={this.clearCompletedTodos} 
              />
            )} />
            <Route path='/' render={() => (
              <TodoList
                todos={this.props.todos}
              // handleClearCompleted={this.clearCompletedTodos} 
              />
            )} />
          </Switch>
          <footer className="footer">
            <span className="todo-count">
              <strong>{this.props.todos.filter(todo => !todo.completed).length} </strong> item(s) left
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
            <button className="clear-completed" onClick={this.props.clearCompletedTodos}>Clear completed</button>
          </footer>
        </section>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  clearCompletedTodos,
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);