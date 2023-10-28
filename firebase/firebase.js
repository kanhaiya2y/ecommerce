


import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
 import{getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAbMyYAN8JMVYkfGDoUJJLVT9RK5hPvjxw",
  authDomain: "firbse-frontend.firebaseapp.com",
  projectId: "firbse-frontend",
  storageBucket: "firbse-frontend.appspot.com",
  messagingSenderId: "163355885527",
  appId: "1:163355885527:web:374053da73e3dc17139592",
  measurementId: "G-N18KXLG8MC"
};const app = initializeApp(firebaseConfig);




 export const auth =getAuth(app)
    export const db=getFirestore(app)