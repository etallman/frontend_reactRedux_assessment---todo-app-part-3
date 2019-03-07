import React, {Component} from 'react';
import TodoItem from './TodoItem.jsx';

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
                onClickCompleted={() => this.props.onClickCompleted(todo.id)}
                handleDestroyTodo={()=>this.props.handleDestroyTodo(todo.id)}
              />
            ))}
          </ul>
        </section>
      );
    }
  }
  export default TodoList