import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default () => {
  firebase.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID,
    apiKey: process.env.FIREBASE_API_KEY,
  });
};
