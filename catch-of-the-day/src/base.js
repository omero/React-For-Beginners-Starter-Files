import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbrEHUptSGk-_sXTZNlgRe3Lhn_pcyvY0",
  authDomain: "catch-of-the-day-omers.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-omers.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export

export default base;