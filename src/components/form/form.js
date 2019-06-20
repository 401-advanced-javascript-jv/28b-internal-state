import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          onChange={this.props.handleChange}
          name="name"
        />
        <button>Submit</button>
      </form>
    );
  }
}
