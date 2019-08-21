import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  name?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  state = { counter: 0 };

  handleIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h2>Hello, {this.props.name || 'No Name'}!</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App name="shawnkoon" />, document.querySelector('#root'));
