import { connect } from 'react-redux';
import _ from 'lodash';
import { endTurn, dragEndSuccess } from '../../store/actions/boardActions';
import Board from '../presentationals/Board/Board.jsx';

const mapStateToProps = ({boardReducer}) => ({
  turnNumber: boardReducer.turnNumber,
  turnPlayerId: boardReducer.turnPlayerId,
  turnPlayer: boardReducer.turnPlayer,
  manaPool: boardReducer.manaPool,
  playerOneHand: boardReducer.playerOneHand,
  playerTwoHand: boardReducer.playerTwoHand,
  playerThreeHand: boardReducer.playerThreeHand,
  playerFourHand: boardReducer.playerFourHand,
  playerOneFz: boardReducer.playerOneFz,
  playerTwoFz: boardReducer.playerTwoFz,
  playerThreeFz: boardReducer.playerThreeFz,
  playerFourFz: boardReducer.playerFourFz
})

const component = connect(
  mapStateToProps,
  {
    endTurn,
    dragEndSuccess,
  }
)(Board);

export default component;
