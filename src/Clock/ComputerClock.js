import React from 'react';

class ComputerClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date(),
      local: "mudou"
    });
    this.state = {date: new Date};
  }

  render() {
    let {date, local} = this.state;
    return (
      <div>
        <h2>Local Clock IS  >>{date.toLocaleTimeString()}.</h2>
        
      </div>
    );
  }
}
export default ComputerClock;