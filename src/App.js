import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/presentationals/Board/Board.jsx';
import './App.css';

const hands = [
  {
    player: 'Billy',
    cards: [
      {
        name: "Lord Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Billy'
      },
      {
        name: "Seigneur Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Billy'
      },
      {
        name: "Big Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Billy'
      }
    ]
  },
  {
    player: 'John',
    cards: [
      {
        name: "Lord Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'John'
      },
      {
        name: "Seigneur Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'John'
      },
      {
        name: "Little Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'John'
      }
    ]
  },
  {
    player: 'Jack',
    cards: [
      {
        name: "Lord Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Jack',
      },
      {
        name: "Seigneur Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Jack'
      },
      {
        name: "Big Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Jack'
      },
      {
        name: "Little Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Jack'
      }
    ]
  },
  {
    player: 'Bob',
    cards: [
      {
        name: "Lord Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Bob'
      },
      {
        name: "Seigneur Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Bob'
      },
      {
        name: "Big Billy",
        pictureSrc: "./dragon.jpg",
        atkDistance:4,
        atkMelee:2,
        armor:0,
        pv:5,
        cost:3,
        playerId: 'Bob'
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board 
          hands={hands}
        />
      </div>
    );
  }
}

export default App;
