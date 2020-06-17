import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// initialise firebase 
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
  export const db = firebase.firestore();

  // Formatted as [Destination] >> [Flight Date] >> [Scrape Date] >> get()
  // Commented out for debugging
  /*
  db.collection('flight_price_KUL').doc("2020-06-21")
  .collection('2020-05-22').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Gets the name of the document and the price of the flight
      console.log(`${doc.id} => ${doc.get("Price")}`);
    });
  });
  */



  export default storageRef;