import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9QgeccgkM4Yy8mwSB1Lo9g6i6j98255I",
    authDomain: "fir-auth-26b94.firebaseapp.com",
    projectId: "fir-auth-26b94",
    storageBucket: "fir-auth-26b94.appspot.com",
    messagingSenderId: "733802544189",
    appId: "1:733802544189:web:eef2f477de0066a5ef7e54"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);