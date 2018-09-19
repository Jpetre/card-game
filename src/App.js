import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardContainer from './components/containers/BoardContainer';
import { hands } from './store/mocks/hands';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer 
          hands={hands}
        />
      </div>
    );
  }
}

export default connect()(App);
