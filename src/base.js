import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});


//const prodConfig = {
//  apiKey: process.env.REACT_APP_FIREBASE_KEY,
//  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//};

//const devConfig = {
//  apiKey: process.env.REACT_APP_FIREBASE_KEY,
//  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//};

//const config =
//    process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

//class app {
//    constructor() {
//        firebase.initializeApp(config);
//    }
//}



export default app;
