export const endTurn = payload => dispatch => {
  dispatch({
    type: 'TURN_NUMBER',
    payload
  })
}

export const dragEndSuccess = payload => dispatch => {
  dispatch({
    type: 'DRAG_END_SUCCESS',
    payload
  })
}