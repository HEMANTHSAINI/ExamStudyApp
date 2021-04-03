import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCKS4R8X8ac6TQHPu3x5X0PDEi-7LI9uw0",
    authDomain: "examstudyapp.firebaseapp.com",
    databaseURL: "https://examstudyapp.firebaseio.com",
    projectId: "examstudyapp",
    storageBucket: "examstudyapp.appspot.com",
    messagingSenderId: "511449646256",
    appId: "1:511449646256:web:01908bcfd96505d61b6775",
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();





