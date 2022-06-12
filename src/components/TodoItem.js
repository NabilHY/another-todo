/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import styles from './TodoItem.module.css';

export default class TodoItem extends PureComponent {
  render() {
    const { todos } = this.props;
    const prop = this.props;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <input
              className={styles.checkbox}
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
            <span style={todo.completed ? completedStyle : null}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
