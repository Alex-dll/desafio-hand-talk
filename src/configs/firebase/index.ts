import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMPfMOKusoA-j0Db-9Dt7sIO1J4eG0EJs",
  authDomain: "desafio-hand-talk-eda57.firebaseapp.com",
  databaseURL: "https://desafio-hand-talk-eda57-default-rtdb.firebaseio.com",
  projectId: "desafio-hand-talk-eda57",
  storageBucket: "desafio-hand-talk-eda57.appspot.com",
  messagingSenderId: "409031002150",
  appId: "1:409031002150:web:2293553988d36707d83ee7",
  measurementId: "G-2W8QPBH4GP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
