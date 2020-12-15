import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBV3UaX-md25G86npcV_hv49bI04UrcM4k",
    authDomain: "chatrooms-2cbbf.firebaseapp.com",
    projectId: "chatrooms-2cbbf",
    storageBucket: "chatrooms-2cbbf.appspot.com",
    messagingSenderId: "1613844591",
    appId: "1:1613844591:web:d2ab3bcced524d4d333d9a",
    measurementId: "G-1Y4F39G1ER"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider};
export default db;