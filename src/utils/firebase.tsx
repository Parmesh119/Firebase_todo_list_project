import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBCxqHjHQE-_PcWaYSD7NKjIb7gTsIS2Oo",
    authDomain: "fir-react-28a2c.firebaseapp.com",
    projectId: "fir-react-28a2c",
    storageBucket: "fir-react-28a2c.firebasestorage.app",
    messagingSenderId: "990563811885",
    appId: "1:990563811885:web:3546ed173e9185787daea4",
    databaseURL: "https://fir-react-28a2c-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
