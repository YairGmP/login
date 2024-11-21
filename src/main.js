import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxTC_2-_5z7TLIrOhcaVXdwCjTmQMGW2k",
  authDomain: "login-28ded.firebaseapp.com",
  projectId: "login-28ded",
  storageBucket: "login-28ded.firebasestorage.app",
  messagingSenderId: "441025380748",
  appId: "1:441025380748:web:dd502974a160b3ba0f96a9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
