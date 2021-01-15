import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyCg0BGtW165MHosSDxF--01Yxrczr_BGs8",
    authDomain: "practiceventue.firebaseapp.com",
    databaseURL: "https://practiceventue-default-rtdb.firebaseio.com",
    projectId: "practiceventue",
    storageBucket: "practiceventue.appspot.com",
    messagingSenderId: "659207430010",
    appId: "1:659207430010:web:8d8f5f2c80f36901c840c3",
    measurementId: "G-1PXLBL8TJ8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const ui = new firebaseui.auth.AuthUI(auth);

export { auth, db, storage, ui }