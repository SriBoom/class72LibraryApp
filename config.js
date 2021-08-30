import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC1FelrL_9NUSLliylUC2M16vFeqpBds-g",
  authDomain: "wily-app-6d585.firebaseapp.com",
  projectId: "wily-app-6d585",
  storageBucket: "wily-app-6d585.appspot.com",
  messagingSenderId: "758595638813",
  appId: "1:758595638813:web:2309c71d8b4fbf7878d8f4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
