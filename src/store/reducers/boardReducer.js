const initialState = {
  turn: 1,
  manaPool: [1, 1, 1, 1]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TURN_NUMBER':
      return {
        ...state,
        turn: action.payload,
        manaPool: [action.payload, action.payload, action.payload, action.payload]
      }

    case 'PLAYED_CARD':
      return {
        ...state,
        manaPool: action.payload
      }
    default:
    return state
  }
}