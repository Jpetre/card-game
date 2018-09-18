import { connect } from 'react-redux';
import _ from 'lodash';
import { endTurn } from '../../store/actions/boardActions';
import Board from '../presentationals/Board/Board.jsx';

const mapStateToProps = (state) => ({
  turn: state.boardReducer.turn,
  manaPool: state.boardReducer.manaPool
})

const component = connect(
  mapStateToProps,
  {
    endTurn: endTurn,
  }
)(Board);

export default component;
