// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABSE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

firebase.initializeApp(config)
 
export default firebase;

export const database = firebase.database();