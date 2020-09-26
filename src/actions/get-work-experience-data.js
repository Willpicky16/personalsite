import firebase from 'firebase/app';
import {
  GET_WORK_EXPERIENCE_DATA_START,
  GET_WORK_EXPERIENCE_DATA_SUCCESS,
  GET_WORK_EXPERIENCE_DATA_ERROR,
} from '../constants/actions';

export default () => (dispatch) => {
  dispatch({
    type: GET_WORK_EXPERIENCE_DATA_START,
  });
  firebase
    .firestore()
    .collection('workexperience')
    .get()
    .then((snapshots) => {
      const workExperienceData = [];
      snapshots.forEach((snapshot) => {
        workExperienceData.push(snapshot.data());
      });
      dispatch({
        type: GET_WORK_EXPERIENCE_DATA_SUCCESS,
        workExperienceData,
      });
    })
    .catch(() => {
      dispatch({
        type: GET_WORK_EXPERIENCE_DATA_ERROR,
        message: 'Failed to fetch Work Experience Data',
      });
    });
};
