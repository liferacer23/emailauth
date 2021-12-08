import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const {REACT_APP_API_KEY}=process.env
const firebaseConfig = {
    apiKey: `${REACT_APP_API_KEY}`,
    authDomain: "first-project-with-fireb-a740d.firebaseapp.com",
    projectId: "first-project-with-fireb-a740d",
    storageBucket: "first-project-with-fireb-a740d.appspot.com",
    messagingSenderId: "1045301967041",
    appId: "1:1045301967041:web:eff66429dc2ad76a893c40",
    measurementId: "G-BBGB5TBK7Q"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);