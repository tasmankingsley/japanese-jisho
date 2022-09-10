import { get } from "firebase/database";
import { db } from '../main';

export let jisho;

get(db).then((snapshot) => {
  if (snapshot.exists()) {
    jisho = snapshot.val();
    console.log(snapshot.val());   
  }
}).catch((error) => {
  console.error(error);
});