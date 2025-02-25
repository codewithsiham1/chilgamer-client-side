
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDEjYJsG5QLsALm68WfTTFtxlzeDMmvZhM",
    authDomain: "chilgamer.firebaseapp.com",
    projectId: "chilgamer",
    storageBucket: "chilgamer.firebasestorage.app",
    messagingSenderId: "480446165696",
    appId: "1:480446165696:web:da806e291fa68b01f77325"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app; 