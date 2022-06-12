/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

export default class TodoItem extends PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}
