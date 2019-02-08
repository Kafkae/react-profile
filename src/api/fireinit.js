import firebase from 'firebase';

function initfire() {
  const config = {
    apiKey: 'AIzaSyBcVtVx6ZCSLsouCGU_nFLoODSJcS1U2dQ',
    authDomain: 'react-profile-1ffba.firebaseapp.com',
    databaseURL: 'https://react-profile-1ffba.firebaseio.com',
    projectId: 'react-profile-1ffba',
    storageBucket: 'react-profile-1ffba.appspot.com',
    messagingSenderId: '407281102007',
  };
  firebase.initializeApp(config);
}

export default initfire;
