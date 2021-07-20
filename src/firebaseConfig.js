import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBsqqiWYB4VfrdAvLnydQcEa2MjP_tMqYs",
    authDomain: "hackathon-app-7d812.firebaseapp.com",
    databaseURL: "https://hackathon-app-7d812-default-rtdb.firebaseio.com",
    projectId: "hackathon-app-7d812",
    storageBucket: "hackathon-app-7d812.appspot.com",
    messagingSenderId: "790903296396",
    appId: "1:790903296396:web:e411e4fd32a814282b06a9"
  };
  

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const db = fb.firestore();





export { auth, db};
