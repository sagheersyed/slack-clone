import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAdOv64sq2Hwmjvc7ko04ndDNU_WdX2JJw",
    authDomain: "roshaabapp.firebaseapp.com",
    projectId: "roshaabapp",
    storageBucket: "roshaabapp.appspot.com",
    messagingSenderId: "452636362009",
    appId: "1:452636362009:web:8a4c935b6611673f657188"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const Database = firebaseApp.firestore()
  const Auth = firebase.auth();
  const ProviderGoogle = new firebase.auth.GoogleAuthProvider();
  const ProviderFb = new firebase.auth.FacebookAuthProvider();

//   firestore is the real time database

  export default Database;
  export {Auth , ProviderGoogle , ProviderFb};
//   which we use export database to import in every file which we want to store the file data
//   if we want to connect our component with the firebase (database) in real time data base we import this file.
// firestore() is  used to store real time data...