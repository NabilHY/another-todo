/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

class InputTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const prop = this.props;
    const { title } = this.state;
    e.preventDefault();
    if (title.trim()) {
      prop.addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeHolder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
