/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

export default class TodoItem extends PureComponent {
  render() {
    const { todos } = this.props;
    const prop = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              checked={todo.completed}
              type="checkbox"
              onChange={() => prop.handleChangeProp(todo.id)}
            />
            <button
              type="button"
              onClick={() => prop.deleteTodoProps(todo.id)}
            >
              Delete
            </button>
            {todo.title}
          </li>
        ))}
      </ul>
    );
  }
}
