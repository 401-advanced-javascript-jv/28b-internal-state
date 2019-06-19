import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Display from './components/display/display.js';
import Form from './components/form/form.js';

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
        <Display name={this.state.name} count={this.state.count} />
        <Form
          name={this.state.name}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
