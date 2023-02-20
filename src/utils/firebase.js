import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnAghtlqjtjum_yzK6mv13q2j3UF1XHn4",
  authDomain: "proj01-esp32.firebaseapp.com",
  databaseURL: "https://proj01-esp32-default-rtdb.firebaseio.com",
  projectId: "proj01-esp32",
  storageBucket: "proj01-esp32.appspot.com",
  messagingSenderId: "457388594629",
  appId: "1:457388594629:web:7c61c872a52cadd0b927ac"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);