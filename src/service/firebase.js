// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4onxhsU9gQOcowXoEe2PTRbHUBkvXFRs",
    authDomain: "ecommerce-espinel.firebaseapp.com",
    projectId: "ecommerce-espinel",
    storageBucket: "ecommerce-espinel.appspot.com",
    messagingSenderId: "522024878123",
    appId: "1:522024878123:web:4d8660165ffbce7899ea6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db