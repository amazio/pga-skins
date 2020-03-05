import {actions} from '../reducers/store-reducer';

const CUR_TOURNEY_ENDPOINT = process.env.REACT_APP_CUR_TOURNEY_ENDPOINT;

export default {
  setCurTourney
};

async function setCurTourney(dispatch, freqMS) {
  const tourney = await getCurTourney();
  dispatch({type: actions.UPDATE_CUR_TOURNEY, payload: tourney});
  setTimeout(() => setCurTourney(dispatch, freqMS), freqMS);
}

function getCurTourney() {
  return fetch(CUR_TOURNEY_ENDPOINT).then(res => res.json());
}
