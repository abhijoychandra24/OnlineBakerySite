import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAi791rRtnyLlEsN6efquZspM2oDXbdS9M",
    authDomain: "bakerysite-9d392.firebaseapp.com",
    projectId: "bakerysite-9d392",
    storageBucket: "bakerysite-9d392.appspot.com",
    messagingSenderId: "1029903192066",
    appId: "1:1029903192066:web:3b934104f4827ba2acd71b"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};