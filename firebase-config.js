import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCk2Bw2LkcajUG5fhDIiVp5L5Lq8SrKhXM",
  authDomain: "shipping-system-1299f.firebaseapp.com",
  projectId: "shipping-system-1299f",
  storageBucket: "shipping-system-1299f.firebasestorage.app",
  messagingSenderId: "408260817505",
  appId: "1:408260817505:web:684fef87fad5d1115e7020"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
