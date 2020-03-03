import React from 'react';

class WorldClock extends React.Component {
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
    if (!isLoaded)
    {
      return (<div><h1>Loading...</h1></div>)
    }
    else
    return (
      <div>
        <h2>World Clock IS >>{date.toLocaleTimeString()}.</h2>
        
      </div>
    );
  }
}
export default WorldClock;