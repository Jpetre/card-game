export const endTurn = turn => dispatch => {
  dispatch({
    type: 'TURN_NUMBER',
    payload: turn
  })
}