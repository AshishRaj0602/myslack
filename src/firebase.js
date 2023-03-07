// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDS9wEBv2bBe46D6uN2wIeg3qDaWrKadUQ",
    authDomain: "slack-clone-842c7.firebaseapp.com",
    projectId: "slack-clone-842c7",
    storageBucket: "slack-clone-842c7.appspot.com",
    messagingSenderId: "777644332914",
    appId: "1:777644332914:web:cc887b92952b9acfef6feb",
    measurementId: "G-R9QSH9GLP1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;