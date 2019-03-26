import React, { Component } from "react";
import logo from "./homerdonuts.png";
import "./App.css";
import Quotes from "./Quotes";



class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = { on: true };
  }

  handleClick = () => {
    this.setState({ on: !this.state.on });

  };
  render() {
    const IsWorking = this.state.on ? 'HomerIsWorking' : 'OnBreak';
    const text = this.state.on ? 'Homer Is Working' : 'Break : Time for donuts !!';
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className={IsWorking} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}
          >{text.toUpperCase()}</button>
        </header>


        <Quotes />

      </div>
    );
  }
}

export default App;
