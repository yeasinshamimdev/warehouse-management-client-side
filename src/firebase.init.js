import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDZeEXjMpjVzlb_WNK4OL6Tpue29rhi0OI",
    authDomain: "sports-gear-warehouse.firebaseapp.com",
    projectId: "sports-gear-warehouse",
    storageBucket: "sports-gear-warehouse.appspot.com",
    messagingSenderId: "57138504152",
    appId: "1:57138504152:web:6231409b752f2ac10992ad"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;