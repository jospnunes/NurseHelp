
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCaLLMnkuPtNzmkWiDUn_FrlvP9ll2I5S0",
  authDomain: "nursehelp-3033.firebaseapp.com",
  projectId: "nursehelp-3033",
  storageBucket: "nursehelp-3033.appspot.com",
  messagingSenderId: "5529362373",
  appId: "1:5529362373:web:045e64c433f5e9e8f3f5ac",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
