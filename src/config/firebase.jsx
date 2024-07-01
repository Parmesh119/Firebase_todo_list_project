import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCh51axxnD_G00Ti-NctbR5H4zerpn60jY",
  authDomain: "fir-01-4bab5.firebaseapp.com",
  projectId: "fir-01-4bab5",
  storageBucket: "fir-01-4bab5.appspot.com",
  messagingSenderId: "177853186448",
  appId: "1:177853186448:web:c954ec055ee525564f3315"
};

let app  
try {
  app = initializeApp(firebaseConfig)
  console.log("Firebase initialized successfully")
} catch (err) {
  console.error("Firebase initialization failed", err.message)
}
export default app