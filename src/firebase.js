import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDHz6VtdKlZ-mJwyU0YpO3WDkSCHKXYTV8",
  authDomain: "shield-65adc.firebaseapp.com",
  projectId: "shield-65adc",
  storageBucket: "shield-65adc.appspot.com",
  messagingSenderId: "376787900169",
  appId: "1:376787900169:web:dba0f705216bb61b3da5d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
