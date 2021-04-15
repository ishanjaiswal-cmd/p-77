import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAr7E9fHoWOJHdqieWBIq2_NTq65FEfe2M",
  authDomain: "booksantaapp-e458e.firebaseapp.com",
  projectId: "booksantaapp-e458e",
  storageBucket: "booksantaapp-e458e.appspot.com",
  messagingSenderId: "648386882114",
  appId: "1:648386882114:web:06563ace06bf207f685bdb"
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();