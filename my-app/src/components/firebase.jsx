import firebase from 'firebase/app';
import 'firebase/storage';
require("firebase/firestore");

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
  var db = firebase.firestore();
  db.collection('flight_price_KUL').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => Price: ${doc.get("Price")}`);
      console.log(`${doc.id} => Flight Duration: ${doc.get("Flight Duration")}`)
    });
  });


  export default storageRef;