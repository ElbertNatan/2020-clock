 
import React from 'react';

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    fetch("http://worldtimeapi.org/api/timezone/America/Fortaleza")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            date: result.utc_datetime
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }


  render() {
    let {date, isLoaded, local} = this.state;
    if (!isLoaded)
    {
      return (<div><h1>Loading...</h1></div>)
    }
    else
    return (
      <div>
        <h2>World Clock IS >>{date.toISOString}.</h2>
        
      </div>
    );
  }
}
export default WorldClock;