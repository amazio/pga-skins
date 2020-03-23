import { actions } from '../reducers/store-reducer';

const CUR_TOURNEY_ENDPOINT = '/api/tourneys/current';

export default {
  setCurTourney
};

async function setCurTourney(dispatch) {
  const tourney = await getCurTourney();
  dispatch({type: actions.UPDATE_CUR_TOURNEY, payload: tourney});
}

function getCurTourney() {
  return fetch(CUR_TOURNEY_ENDPOINT).then(res => res.json());
}
