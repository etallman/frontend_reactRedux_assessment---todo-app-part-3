import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from './actions';
class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              onClickCompleted={() => this.props.toggleTodo(todo.id)}
              handleDestroyTodo={() => this.props.deleteTodo(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
}
export default connect(null, mapDispatchToProps)(TodoList)