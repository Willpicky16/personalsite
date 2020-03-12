/* eslint-disable import/prefer-default-export */
import HomePage from '../containers/home-page/home-page';
import AboutMePage from '../containers/about-me-page/about-me-page';
import WorkExperiencePage from '../containers/work-experience-page/work-experience-page';
import ProjectsPage from '../containers/projects-page/projects-page';
import PhotosPage from '../containers/photos-page/photos-page';
import NoMatchPage from '../containers/no-match-page/no-match-page';
import {
  HOME,
  ABOUT_ME,
  WORK_EXPERIENCE,
  PROJECTS,
  PHOTOS,
} from './urls';

const NO_MATCH = {
  url: null,
  component: NoMatchPage,
};

export const APP_ROUTES = [
  {
    url: HOME,
    component: HomePage,
  },
  {
    url: ABOUT_ME,
    component: AboutMePage,
  },
  {
    url: WORK_EXPERIENCE,
    component: WorkExperiencePage,
  },
  {
    url: PROJECTS,
    component: ProjectsPage,
  },
  {
    url: PHOTOS,
    component: PhotosPage,
  },
  NO_MATCH,
];
