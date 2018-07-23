import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Hand from '../Hand/Hand.jsx';
import FightZone from '../FightZone/FightZone.jsx';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  console.log('move', source, destination, droppableSource, droppableDestination);
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneHand: this.props.hands[0].cards,
      playerTwoHand: this.props.hands[1].cards,
      playerThreeHand: this.props.hands[2].cards,
      playerFourHand: this.props.hands[3].cards,
      playerOneFz: [],
      playerTwoFz: [],
      playerThreeFz: [],
      playerFourFz: [],
      turnPlayer: this.props.hands[0].player,
      turnPlayerId: 0,
      turnNumber: 1
    };

    this.areas = {
      playerOneHand: 'playerOneHand',
      playerTwoHand: 'playerTwoHand',
      playerThreeHand: 'playerThreeHand',
      playerFourHand: 'playerFourHand',
      playerOneFz: 'playerOneFz',
      playerTwoFz: 'playerTwoFz',
      playerThreeFz: 'playerThreeFz',
      playerFourFz: 'playerFourFz'
    }

    this.orderTurns = [
      0, 2, 1, 3
    ];
  }

  getList = id => this.state[this.areas[id]];

  getResult = (source, destination) =>
    move(
      this.getList(source.droppableId),
      this.getList(destination.droppableId),
      source,
      destination
    );

  onDragEnd = result => {
    console.log('dragEnd', result);
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }
    
    let resolve = {};
    switch(source.droppableId){
      case 'playerOneHand':{
        if(destination.droppableId === "playerOneFz") {
          resolve = this.getResult(source, destination);
        }
        break;
      }
      case 'playerTwoHand':{
        if(destination.droppableId === "playerTwoFz") {
          resolve = this.getResult(source, destination);
        }
        break;
      }
      case 'playerThreeHand':{
        if(destination.droppableId === "playerThreeFz") {
          resolve = this.getResult(source, destination);
        }
        break;
      }
      case 'playerFourHand':{
        if(destination.droppableId === "playerFourFz") {
          resolve = this.getResult(source, destination);
        }
        break;
      }
      default: 
        return;
    }

    this.setState({
        ...this.state,
        ...resolve
    });
  };

  nextTurn = () => {
    const { turnNumber, turnPlayerId } = this.state;

    let nextTurnPlayerId = 0;
    for(let i = 0; i < this.orderTurns.length - 1; i++) {
      console.log('i', i, this.orderTurns.length - 1);
      if (i ===this.orderTurns[turnPlayerId]) {
        if(i === this.orderTurns.length - 1) {
          nextTurnPlayerId = this.orderTurns[0];
          break;
        }
        nextTurnPlayerId = this.orderTurns[i+1];
        break;
      }
    }
    console.log('halo');
    this.setState({
      turnNumber: turnNumber + 1,
      turnPlayerId: nextTurnPlayerId,
      turnPlayer: this.props.hands[nextTurnPlayerId].player
    });
  }

  render() {
    const {
      playerOneHand, playerTwoHand, playerThreeHand, playerFourHand,
      playerOneFz, playerTwoFz, playerThreeFz, playerFourFz,
      turnPlayer
    } = this.state;

    return (
      <section className="board">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="board_lane">   
            <div className="board_lane_player">
              <Hand
                cards={playerOneHand}
                player={this.props.hands[0].player}
                droppableId='playerOneHand'
                isDragDisabled={turnPlayer !== this.props.hands[0].player}
              />
            </div>
            <div className="board_lane_battleField">
              <FightZone 
                player={this.props.hands[0].player}
                cards={playerOneFz}
                droppableId='playerOneFz'
                isDragDisabled={turnPlayer !== this.props.hands[0].player}
              />
              <FightZone 
                player={this.props.hands[2].player}
                cards={playerThreeFz}
                droppableId='playerThreeFz'
                isDragDisabled={turnPlayer !== this.props.hands[2].player}
              />
            </div>
            <div className="board_lane_player">
              <Hand
                cards={playerThreeHand}
                player={this.props.hands[2].player}
                droppableId='playerThreeHand'
                isDragDisabled={turnPlayer !== this.props.hands[2].player}
              />
            </div>
          </div>
          <button
            className="board_nextTurn"
            onClick={() => this.nextTurn()}
          > done </button>
          <div className="board_lane">   
            <div className="board_lane_player">
              <Hand
                cards={playerTwoHand}
                player={this.props.hands[1].player}
                droppableId='playerTwoHand'
                isDragDisabled={turnPlayer !== this.props.hands[1].player}
              />
            </div>
            <div className="board_lane_battleField">
              <FightZone 
                player={this.props.hands[1].player}
                cards={playerTwoFz}
                droppableId='playerTwoFz'
                isDragDisabled={turnPlayer !== this.props.hands[1].player}
              />
              <FightZone 
                player={this.props.hands[3].player}
                cards={playerFourFz}
                droppableId='playerFourFz'
                isDragDisabled={turnPlayer !== this.props.hands[3].player}
              />
            </div>
            <div className="board_lane_player">
              <Hand
                cards={playerFourHand}
                player={this.props.hands[3].player}
                droppableId='playerFourHand'
                isDragDisabled={turnPlayer !== this.props.hands[3].player}
              />
            </div>
          </div>
        </DragDropContext>
      </section>
    );
  }
}

Board.propTypes = {
  hands: PropTypes.array    
}

export default Board;