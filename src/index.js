import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.count = '';
    this.state.name = '';
  }

  handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    this.setState({ [property]: value });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: </div>
        </div>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
        </form>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
