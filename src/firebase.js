import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7w5Y1NwGKQQjVSvU7JlAYeAM_1DAySZA",
    authDomain: "basic-bank-49841.firebaseapp.com",
    projectId: "basic-bank-49841",
    storageBucket: "basic-bank-49841.appspot.com",
    messagingSenderId: "788422550853",
    appId: "1:788422550853:web:7d5106ce9619015f710a2c",
    measurementId: "G-JYHSTMBF2P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };