import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.name}
          name="name"
        />
        <button>Submit</button>
      </form>
    );
  }
}
