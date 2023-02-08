import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnoxHJRlB5aDKWXe3bQbmFEDMsXY93_JA",
  authDomain: "chat-app-5241b.firebaseapp.com",
  projectId: "chat-app-5241b",
  storageBucket: "chat-app-5241b.appspot.com",
  messagingSenderId: "774653756036",
  appId: "1:774653756036:web:ffb32f898da38850f078d1"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()