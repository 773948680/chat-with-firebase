import {
  REACT_APP_API_KEY,
  REACT_APP_APP_ID,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
} from "@env";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// npx expo install @react-native-async-storage/async-storage





// Import the functions you need from the SDKs you need
//https://firebase.google.com/docs/auth/web/start?authuser=0

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  appId: REACT_APP_APP_ID,
  authDomain: REACT_APP_AUTH_DOMAIN,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);

export { firestore, auth};
