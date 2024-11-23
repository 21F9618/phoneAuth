import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



export const firebaseConfig = {
    apiKey: "AIzaSyBBWk38TeHQuJbeABQZk2sjSnLgJ_FkVhE",
    authDomain: "test-b499b.firebaseapp.com",
    projectId: "test-b499b",
    storageBucket: "test-b499b.firebasestorage.app",
    messagingSenderId: "826059411486",
    appId: "1:826059411486:web:5d35f520d6e3a9e5955e0f",
    measurementId: "G-PV60KVHKTB"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}