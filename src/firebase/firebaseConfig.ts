import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyByN0b6nL-mFCnj8ihUOfiv8frLS66Fbq0",
	authDomain: "anchorage-demo.firebaseapp.com",
	projectId: "anchorage-demo",
	storageBucket: "anchorage-demo.appspot.com",
	messagingSenderId: "917719833034",
	appId: "1:917719833034:web:1101f96926e5cb88a69733",
	measurementId: "G-40GHQ1SDVT",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
