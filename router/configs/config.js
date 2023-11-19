import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAXuePrc8YwWzE9BT27tyBDVmEKuPL2zzs",
  authDomain: "sl-e-guide-97faf.firebaseapp.com",
  projectId: "sl-e-guide-97faf",
  messagingSenderId: "645145019769",
  appId: "1:645145019769:web:ba3f824123114c68b71ba8"
};

// Initialize Firebase
// Initialize Firebase
const app=initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage
const storage = getStorage(app);

export {db};
export {app};
export {storage};






