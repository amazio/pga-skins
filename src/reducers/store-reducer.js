export const initialState = {
  curTourney: null,
};

export const actions = {
  UPDATE_CUR_TOURNEY: 'UPDATE_CUR_TOURNEY',
};

function storeReducer(state, action) {
  switch(action.type) {
    case actions.UPDATE_CUR_TOURNEY:
      return {...state, curTourney: action.payload}
    default:
      return state;
  }
}

export default storeReducer;
