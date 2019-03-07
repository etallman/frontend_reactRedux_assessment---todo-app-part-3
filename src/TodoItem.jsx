import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
      return (
        
          <li className={this.props.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={this.props.completed}
                onChange={this.props.onClickCompleted}
              />
              <label>{this.props.title}</label>
              <button className="destroy" onClick={this.props.handleDestroyTodo} />
            </div>
          </li>
      
      );
    }
  }
  export default TodoItem