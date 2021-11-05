import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_DB_API_KEY,
  authDomain: process.env.REACT_APP_DB_AUTH_DOMAIN,
  databaseUrl: process.env.REACT_APP_DB_DATABASE_URL,
  projectId: process.env.REACT_APP_DB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DB_APP_ID,
});

export const auth = app.auth();
export const db = app.firestore();
export const database = app.database();
export const storage = app.storage();

export default app;
