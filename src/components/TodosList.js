/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import TodoItem from '../components/TodoItem';

class TodosList extends PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <TodoItem todos={todos} />
    );
  }
}

export default TodosList;
