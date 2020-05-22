import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCXszezP_a4hYHnCkmvKY-_NgTTwwJNXko",
    authDomain: "skyx-abc03.firebaseapp.com",
    databaseURL: "https://skyx-abc03.firebaseio.com",
    projectId: "skyx-abc03",
    storageBucket: "skyx-abc03.appspot.com",
    messagingSenderId: "195636749609",
    appId: "1:195636749609:web:81385897b007abbd8e4338",
    measurementId: "G-CQKC96NVW6"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  var storageRef = storage.ref();



  export default storageRef;