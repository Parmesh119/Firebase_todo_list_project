import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB-pN7BwyOv-bsVeY6qDZT6knVlPP7ouV0",
    authDomain: "fir-react-course-ecf7e.firebaseapp.com",
    projectId: "fir-react-course-ecf7e",
    storageBucket: "fir-react-course-ecf7e.appspot.com",
    messagingSenderId: "495410929195",
    appId: "1:495410929195:web:90b09baaa43240d6ead46e",
    measurementId: "G-821ZVQPWHD"
  };
const app = initializeApp(firebaseConfig);
export default app