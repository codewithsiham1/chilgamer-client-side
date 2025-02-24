// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDEjYJsG5QLsALm68WfTTFtxlzeDMmvZhM",
//   authDomain: "chilgamer.firebaseapp.com",
//   projectId: "chilgamer",
//   storageBucket: "chilgamer.firebasestorage.app",
//   messagingSenderId: "480446165696",
//   appId: "1:480446165696:web:da806e291fa68b01f77325"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//  const auth=getAuth(app)
//  export default auth;
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
export const auth = getAuth(app); // auth অবজেক্ট এক্সপোর্ট করা হলো
export default app; // app অবজেক্ট এক্সপোর্ট করা হলো