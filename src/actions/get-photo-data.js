import firebase from 'firebase/app';
import {
  GET_PHOTO_DATA_START,
  GET_PHOTO_DATA_SUCCESS,
  GET_PHOTO_DATA_ERROR,
} from '../constants/actions';

export default () => (dispatch) => {
  dispatch({
    type: GET_PHOTO_DATA_START,
  });
  firebase
    .firestore()
    .collection('photos')
    .get()
    .then((snapshots) => {
      const photoData = [];
      snapshots.forEach((snapshot) => {
        photoData.push(snapshot.data());
      });
      dispatch({
        type: GET_PHOTO_DATA_SUCCESS,
        photoData,
      });
    })
    .catch(() => {
      dispatch({
        type: GET_PHOTO_DATA_ERROR,
        message: 'Failed to fetch Photo data',
      });
    });
};
