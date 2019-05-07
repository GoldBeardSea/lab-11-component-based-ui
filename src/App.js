import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Simple Counter Incrementer Decrementer</h1>
    </header>
  );
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  };

  increment = e => {
    let counter = this.state.counter + 1;
    this.setState({counter});
    console.log(this.state);
  };

  decrement = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    this.setState({counter});
    console.log(this.state);
  };

  pow = e => {
    e.preventDefault();
    let counter = Math.pow(2, this.state.counter);
    this.setState({counter});
    console.log(this.state);
  }

  sqrt = e => {
    e.preventDefault();
    let counter = Math.sqrt(this.state.counter);
    this.setState({counter});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.decrement}> Decrement </button>
        <button onClick={this.increment} > Increment </button>
        <button onClick={this.pow} > Pow </button>
        <button onClick={this.sqrt} > sqrt  </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
    );
  }
}

export default App;
