import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkD27axO9sooM_fyR0Q5hDaX2q4dytznE",
    authDomain: "catch-of-the-day---aso.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---aso-default-rtdb.firebaseio.com"
  })

  const base = Rebase.createClass(firebaseApp.database())

  export {firebaseApp};

  export default base;