import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY2Km4K8x7WsZoHhOLcfsuxvOeMudrEhw",
  authDomain: "list-app-d1926.firebaseapp.com",
  projectId: "list-app-d1926",
  storageBucket: "list-app-d1926.appspot.com",
  messagingSenderId: "535954374061",
  appId: "1:535954374061:web:69c5ec75e81561f6893524"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth();

export { db,auth };
