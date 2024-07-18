
// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-pF1hRp8ThtoP1TJ0_FLRWxKmM2O40jA",
  authDomain: "qr-application-50460.firebaseapp.com",
  projectId: "qr-application-50460",
  storageBucket: "qr-application-50460.appspot.com",
  messagingSenderId: "936658974542",
  appId: "1:936658974542:web:21a5584156e5d25a55901f",
  measurementId: "G-WEPX8WE047"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
