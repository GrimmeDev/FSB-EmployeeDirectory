import './App.css';
import React from "react";
import Axios from "axios";

class App extends React.Component {
  state = {
    result: {}
  };

  componentDidMount() {
    this.getRandos();
  }

  getRandos = () => {
    Axios.get(
      `https://randomuser.me/api/?results=12`,
    ).then(randomEmps => {
      console.log('randomEmps==>>', randomEmps);
      this.setState({ result: randomEmps.data.results });
      console.log('state==>>', this.state.result);
    })
  }
  render() {
    // const {result} = this.state;
    return (
      <>
        <div>HEADER</div>
      </>
    );
  }
}

export default App;
