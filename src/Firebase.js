import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDxFVSJzEriG1HBGsT8StxRiXZ1HRJVXwM",
  authDomain: "disney-clone-61bfb.firebaseapp.com",
  projectId: "disney-clone-61bfb",
  storageBucket: "disney-clone-61bfb.appspot.com",
  messagingSenderId: "384020823037",
  appId: "1:384020823037:web:caaeae69ca1e117ea93794"
};

// eslint-disable-next-line no-undef
const firebaseApp = initializeApp(firebaseConfig);
const auth =getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider= new GoogleAuthProvider();
const storage=getStorage(firebaseApp);

 
export {auth , provider ,storage};
export default db;