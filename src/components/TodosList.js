/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodosList extends PureComponent {
  render() {
    const { todos } = this.props;
    const prop = this.props;
    return (
      <TodoItem
        handleChangeProp={prop.handleChangeProp}
        deleteTodoProps={prop.deleteTodoProps}
        todos={todos}
      />
    );
  }
}

export default TodosList;
