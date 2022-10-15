import { createApp } from 'vue'
import './style.css'

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
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
const analytics = getAnalytics(app);



//////// review loading database here //////////
// export let jisho_db;

// (async () => {

//   // first checks if there is a local indexDB to use
//   await localforage.getItem('local_jisho').then((value) => {
//     jisho_db = value;
//   }).catch(function(err) {
//     console.log(err);
//   });

//   // if there is no indexDB jisho will === null,
//   // in that case we will download a snapshot from firebase, and store it locally for next use (improves load times and firebase usage dramatically).
//   if (jisho_db === null) {
//     await get(db).then((snapshot) => {
//         if (snapshot.exists()) {

//             jisho_db = snapshot.val();

//             localforage.setItem('local_jisho', jisho_db).then((value) => {
//                 console.log(value);
//             }).catch((err) => {
//                 console.log(err);
//             });
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
//   }

// })();

import App from './App.vue'

createApp(App).mount('#app')
