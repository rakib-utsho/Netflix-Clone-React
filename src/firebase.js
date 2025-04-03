import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbn2o69QrWTkotDKG1ZG1s9ZuiQJo9I0s",
  authDomain: "netflix-clone-c1ec3.firebaseapp.com",
  projectId: "netflix-clone-c1ec3",
  storageBucket: "netflix-clone-c1ec3.firebasestorage.app",
  messagingSenderId: "742402007583",
  appId: "1:742402007583:web:deadca0a36fde41b73ab2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// user signup
const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("User account created successfully!");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// user login
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// user logout
const logout = () => {
  signOut(auth);
  toast.success("Logout!");
};

export { auth, db, signup, login, logout };
