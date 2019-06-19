import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div># of Updates: {this.props.count}</div>
      </div>
    );
  }
}
