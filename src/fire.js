import firebase from 'firebase';
import firestore from 'firebase/firestore';
import database from 'firebase/database'

  var firebaseConfig = {
    apiKey: "AIzaSyA1WbGFONrKgoeIskZ9crnTDnG13IXIq8o",
    authDomain: "daw2login-2a0f6.firebaseapp.com",
    projectId: "daw2login-2a0f6",
    storageBucket: "daw2login-2a0f6.appspot.com",
    messagingSenderId: "671750249422",
    appId: "1:671750249422:web:13c19799c3bc673a4d699f"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  const db = fire.firestore();
 
  export {db};
  export default fire;