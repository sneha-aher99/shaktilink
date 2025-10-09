// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCb38asgmw04KmyiZwOwJn72PTcqFuOb4U",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "shaktilink-web-app.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "shaktilink-web-app",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "shaktilink-web-app.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "986421858603",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:986421858603:web:49afee61649db60b0d356e",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-KBKCDEZ9W1"
};

// initialize
const app = initializeApp(firebaseConfig);

// export the services you need
export const auth = getAuth(app);
export const db = getFirestore(app);

// analytics is optional — guard it (e.g. for SSR or missing config)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // analytics will throw if environment lacks window or measurementId — safe to ignore
  // console.warn("Firebase analytics not initialized:", e);
}
export { analytics };
export default app;
