import { Map } from 'immutable';
import {
  GET_WORK_EXPERIENCE_DATA_START,
  GET_WORK_EXPERIENCE_DATA_SUCCESS,
  GET_WORK_EXPERIENCE_DATA_ERROR,
} from '../constants/actions';
import STORE_KEYS from '../constants/store-keys';

const {
  IS_WORK_EXPERIENCE_DATA_LOADING, WORK_EXPERIENCE_DATA, WORK_EXPERIENCE_DATA_LOADING_ERROR,
} = STORE_KEYS.WORK_EXPERIENCE_DATA;

const initialState = {};
initialState[IS_WORK_EXPERIENCE_DATA_LOADING] = false;
initialState[WORK_EXPERIENCE_DATA] = [];
initialState[WORK_EXPERIENCE_DATA_LOADING_ERROR] = '';
const initialStateMap = Map(initialState);

export default (state = initialStateMap, action) => {
  switch (action.type) {
    case GET_WORK_EXPERIENCE_DATA_START:
      return state
        .set(IS_WORK_EXPERIENCE_DATA_LOADING, true)
        .set(WORK_EXPERIENCE_DATA, [])
        .set(WORK_EXPERIENCE_DATA_LOADING_ERROR, '');
    case GET_WORK_EXPERIENCE_DATA_SUCCESS:
      return state
        .set(IS_WORK_EXPERIENCE_DATA_LOADING, false)
        .set(WORK_EXPERIENCE_DATA, action.workExperienceData);
    case GET_WORK_EXPERIENCE_DATA_ERROR:
      return state
        .set(IS_WORK_EXPERIENCE_DATA_LOADING, false)
        .set(WORK_EXPERIENCE_DATA_LOADING_ERROR, action.message);
    default:
      return state;
  }
};
