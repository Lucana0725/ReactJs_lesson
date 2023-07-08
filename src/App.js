import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Michael'};
  }

  handleClickButton() {
    this.setState({name: 'Luca'});
  }

  // handleClickButton() {
  //   this.setState({});
  // }

  render() {
    return (
      // // デフォルト記述(React.jsのウェルカムページ)
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
        <h1>Hello world! This is {this.state.name}!</h1>
        <button id="track-button" onClick={() => {this.handleClickButton()}}>Click Me!!</button>
      </div>
    );
  }
}

export default App;
