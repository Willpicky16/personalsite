import { Map } from 'immutable';
import {
  GET_PHOTO_DATA_START,
  GET_PHOTO_DATA_SUCCESS,
  GET_PHOTO_DATA_ERROR,
} from '../constants/actions';
import STORE_KEYS from '../constants/store-keys';

const {
  IS_PHOTO_DATA_LOADING, PHOTO_DATA, PHOTO_DATA_LOADING_ERROR,
} = STORE_KEYS.PHOTO_DATA;

const initialState = {};
initialState[IS_PHOTO_DATA_LOADING] = false;
initialState[PHOTO_DATA] = [];
initialState[PHOTO_DATA_LOADING_ERROR] = '';
const initialStateMap = Map(initialState);

export default (state = initialStateMap, action) => {
  switch (action.type) {
    case GET_PHOTO_DATA_START:
      return state
        .set(IS_PHOTO_DATA_LOADING, true)
        .set(PHOTO_DATA, [])
        .set(PHOTO_DATA_LOADING_ERROR, '');
    case GET_PHOTO_DATA_SUCCESS:
      return state
        .set(IS_PHOTO_DATA_LOADING, false)
        .set(PHOTO_DATA, action.photoData);
    case GET_PHOTO_DATA_ERROR:
      return state
        .set(IS_PHOTO_DATA_LOADING, false)
        .set(PHOTO_DATA_LOADING_ERROR, action.message);
    default:
      return state;
  }
};
