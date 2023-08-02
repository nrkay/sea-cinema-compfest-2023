import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBSOM2CD5516duxIIbv2NLvtQo8vTZMvbs",
  authDomain: "compest-ui.firebaseapp.com",
  projectId: "compest-ui",
  storageBucket: "compest-ui.appspot.com",
  messagingSenderId: "787121948150",
  appId: "1:787121948150:web:77b99173fbf3f97288b3d7",
  measurementId: "G-Y9V82WX1Q0",
};

const app = initializeApp(firebaseConfig);

export const authConfig = getAuth(app);
// const analytics = getAnalytics(app);
