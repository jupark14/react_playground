import React from "react";

class App extends React.Component {
  state = { seconds: 0 };

  tick = () => {
    this.setState({
      seconds: this.state.seconds + 1,
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

export default App;
