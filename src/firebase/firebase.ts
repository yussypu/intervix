import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAShco393OPVpLdiamiUTlgoRh1tW4pUuI",
  authDomain: "intervix-19efb.firebaseapp.com",
  projectId: "intervix-19efb",
  storageBucket: "intervix-19efb.appspot.com",
  messagingSenderId: "543380202671",
  appId: "1:543380202671:web:2aeb497ef6241a4cc6a05a",
  measurementId: "G-8NPEPF9Q52"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window !== "undefined") {
  // Analytics should only be initialized in the browser
  analytics = getAnalytics(app);
}

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
