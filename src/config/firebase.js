import firebase from 'firebase';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBQu4Mumf4qu1r8nBA_GQZINAjQb0UatcE',
  authDomain: 'taskapp-fd3f0.firebaseapp.com',
  projectId: 'taskapp-fd3f0',
  storageBucket: 'taskapp-fd3f0.appspot.com',
  messagingSenderId: '881242524551',
  appId: '1:881242524551:web:6db378226d5a8eb0e8e122',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
