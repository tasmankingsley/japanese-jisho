import { createApp } from 'vue'
import './style.css'
import { reactive } from 'vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

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
export const app = initializeApp(firebaseConfig);
export const db = ref(getDatabase());

// export let jisho = JSON.parse(localStorage.getItem('jisho_store')) || [];

// // export let jisho;
// if (jisho === []) {
  
//   get(db).then((snapshot) => {
//     if (snapshot.exists()) {
//       jisho = snapshot.val();
//       localStorage.setItem('jisho_store', JSON.stringify(jisho));

//       console.log(snapshot.val());   
//     }
//   }).catch((error) => {
//     console.error(error);
//   });

// }


// export let jisho;
// export const dbRef = ref(getDatabase());
// await get(ref(getDatabase())).then((snapshot) => {
//   if (snapshot.exists()) {
//     jisho = snapshot.val();
//     console.log(snapshot.val());   
//   }
// }).catch((error) => {
//   console.error(error);
// });


import App from './App.vue'

createApp(App).mount('#app')
