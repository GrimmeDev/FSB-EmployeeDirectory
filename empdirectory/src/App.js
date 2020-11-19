import "./reset.css";
import './App.css';
import React from "react";
import Axios from "axios";
import Results from "./components/Results/Results"

class App extends React.Component {
  state = {
    result: []
  };

  componentDidMount() {
    this.getRandos();
  }

  getRandos = () => {
    Axios.get(
      `https://randomuser.me/api/?results=12`,
    ).then(randomEmps => {
      // console.log('randomEmps==>>', randomEmps);
      this.setState({ result: randomEmps.data.results });
      // console.log('state==>>', this.state.result);
    })
      .catch(err => {
        console.log('err==>>', err);
      })
  }
  render() {
    // const { result } = this.state;
    // console.log('result==>>', result);
    return (
      <>
        <div className="container-fluid">
          <div className="col-lg-12">
            <header className="page-header">
              <h1 className="text-center">FauxComp - Employee Directory</h1>
            </header>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mainRow">
            {/* FILTER COLUMN */}
            <div className="col-lg-3 filterColumn d-inline-block">
              TESTING PURPOSES
            </div>
            {/* RESULTS COLUMN */}
            <div className="col-lg-9 resultColumn d-inline-block">
              <ul className="list-unstyled">
              {this.state.result.map(emp => (
                <Results
                  props={emp}
                />
              ))}
              </ul>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default App;
