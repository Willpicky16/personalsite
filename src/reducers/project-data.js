import { Map } from 'immutable';
import {
  GET_PROJECT_DATA_START,
  GET_PROJECT_DATA_SUCCESS,
  GET_PROJECT_DATA_ERROR,
} from '../constants/actions';
import STORE_KEYS from '../constants/store-keys';

const {
  IS_PROJECT_DATA_LOADING, PROJECT_DATA, PROJECT_DATA_LOADING_ERROR,
} = STORE_KEYS.PROJECT_DATA;

const initialState = {};
initialState[IS_PROJECT_DATA_LOADING] = false;
initialState[PROJECT_DATA] = [];
initialState[PROJECT_DATA_LOADING_ERROR] = '';
const initialStateMap = Map(initialState);

export default (state = initialStateMap, action) => {
  switch (action.type) {
    case GET_PROJECT_DATA_START:
      return state
        .set(IS_PROJECT_DATA_LOADING, true)
        .set(PROJECT_DATA, [])
        .set(PROJECT_DATA_LOADING_ERROR, '');
    case GET_PROJECT_DATA_SUCCESS:
      return state
        .set(IS_PROJECT_DATA_LOADING, false)
        .set(PROJECT_DATA, action.projectData);
    case GET_PROJECT_DATA_ERROR:
      return state
        .set(IS_PROJECT_DATA_LOADING, false)
        .set(PROJECT_DATA_LOADING_ERROR, action.message);
    default:
      return state;
  }
};
