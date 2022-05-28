import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGgfYpjNUmvJrgo-59Fy8lxHMOsIHWLDA",
  authDomain: "vasiti-testimonial.firebaseapp.com",
  projectId: "vasiti-testimonial",
  storageBucket: "vasiti-testimonial.appspot.com",
  messagingSenderId: "152265103194",
  appId: "1:152265103194:web:b053d84b38f7e1e3d08563",
  measurementId: "G-C5WEVY41M6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;