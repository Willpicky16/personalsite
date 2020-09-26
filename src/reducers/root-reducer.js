import { combineReducers } from 'redux';
import photoData from './photo-data';
import projectData from './project-data';
import workExperienceData from './work-experience-data';

export default combineReducers({
  photoData,
  projectData,
  workExperienceData,
});
