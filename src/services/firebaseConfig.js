import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBgg5K7sDVIILjEYYPuVVDiHEY-3z5wUqw",
  authDomain: "tiktok-clone-react-native.firebaseapp.com",
  projectId: "tiktok-clone-react-native",
  storageBucket: "tiktok-clone-react-native.appspot.com",
  messagingSenderId: "468596433910",
  appId: "1:468596433910:web:58bdfd4e5d934bf5269dd7",
  measurementId: "G-Q7TYT203N4",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
