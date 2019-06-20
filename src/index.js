import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.count = 0;
    this.state.name = '';
  }

  handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    this.setState({ [property]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <button>Submit</button>
        </form>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
