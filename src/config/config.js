import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyBcGGIdO7bBNgV8wVSVNkg-AC1Q0azEN0Q",
      authDomain: "todoreactjs-dfc23.firebaseapp.com",
      databaseURL: "https://todoreactjs-dfc23.firebaseio.com",
      projectId: "todoreactjs-dfc23",
      storageBucket: "todoreactjs-dfc23.appspot.com",
      messagingSenderId: "434022226834",
      appId: "1:434022226834:web:0be22dbb29a5ace316ff4b"
}

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

//Cuando importemos config.js importará estas variables
export default firebase