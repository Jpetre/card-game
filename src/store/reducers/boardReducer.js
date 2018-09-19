import { hands } from '../mocks/hands';

const initialState = {
  turnNumber: 1,
  manaPool: [1, 1, 1, 1],
  turnPlayerId: 0,
  turnPlayer: hands[0].player,
  playerOneHand: hands[0].cards,
  playerTwoHand: hands[1].cards,
  playerThreeHand: hands[2].cards,
  playerFourHand: hands[3].cards,
  playerOneFz: [],
  playerTwoFz: [],
  playerThreeFz: [],
  playerFourFz: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TURN_NUMBER':
      return {
        ...state,
        turnNumber: action.payload.nextTurnNumber,
        turnPlayerId: action.payload.nextTurnPlayerId,
        turnPlayer: hands[action.payload.nextTurnPlayerId].player,
        manaPool: [action.payload.nextTurnNumber, action.payload.nextTurnNumber, action.payload.nextTurnNumber, action.payload.nextTurnNumber]
      }

    case 'DRAG_END_SUCCESS':
      return {
        ...state,
        playerOneHand: action.payload.playerOneHand,
        playerTwoHand: action.payload.playerTwoHand,
        playerThreeHand: action.payload.playerThreeHand,
        playerFourHand: action.payload.playerFourHand,
        playerOneFz: action.payload.playerOneFz,
        playerTwoFz: action.payload.playerTwoFz,
        playerThreeFz: action.payload.playerThreeFz,
        playerFourFz: action.payload.playerFourFz,
      }
    default:
    return state
  }
}