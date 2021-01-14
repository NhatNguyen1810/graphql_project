import firebase from "firebase/app"
import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyA5nHLGJL2eYnaRsdi__LiR1yPvUO4IMSs",
    authDomain: "gqlreactnode-d589d.firebaseapp.com",
    projectId: "gqlreactnode-d589d",
    storageBucket: "gqlreactnode-d589d.appspot.com",
    // messagingSenderId: "839366457199",
    appId: "1:839366457199:web:7e967a92d90a5d2af51a9a",
    measurementId: "G-5KK6SN74PJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();