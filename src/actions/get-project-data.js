import firebase from 'firebase/app';
import {
  GET_PROJECT_DATA_START,
  GET_PROJECT_DATA_SUCCESS,
  GET_PROJECT_DATA_ERROR,
} from '../constants/actions';

export default () => (dispatch) => {
  dispatch({
    type: GET_PROJECT_DATA_START,
  });
  firebase
    .firestore()
    .collection('projects')
    .get()
    .then((snapshots) => {
      const projectData = [];
      snapshots.forEach((snapshot) => {
        projectData.push(snapshot.data());
      });
      dispatch({
        type: GET_PROJECT_DATA_SUCCESS,
        projectData,
      });
    })
    .catch(() => {
      dispatch({
        type: GET_PROJECT_DATA_ERROR,
        message: 'Failed to fetch Project Data',
      });
    });
};
