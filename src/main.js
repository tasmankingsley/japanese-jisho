import { createApp } from 'vue'
import './style.css'
import { reactive } from 'vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",
  authDomain: "japanesejisho.firebaseapp.com",
  databaseURL: "https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "japanesejisho",
  storageBucket: "japanesejisho.appspot.com",
  messagingSenderId: "255107822451",
  appId: "1:255107822451:web:5f719e8be86c97d0478b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export let jisho;
export const dbRef = ref(getDatabase());
get(child(dbRef, 'words')).then((snapshot) => {
  if (snapshot.exists()) {
    jisho = snapshot.val();
    console.log(snapshot.val());
    
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


import App from './App.vue'

createApp(App).mount('#app')
