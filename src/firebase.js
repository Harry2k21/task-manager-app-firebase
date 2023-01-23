import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtZpcIMhKoCF58LOoVCG0VA_B4RmOSD3o",
  authDomain: "todo-avs.firebaseapp.com",
  projectId: "todo-avs",
  storageBucket: "todo-avs.appspot.com",
  messagingSenderId: "915034672734",
  appId: "1:915034672734:web:3218f596e3a9b7f1572ecf",
  measurementId: "G-DNYRMFLC01"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };