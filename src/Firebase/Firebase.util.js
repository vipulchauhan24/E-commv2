import {initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrH8F9WxuKcijDPZ5XVZJLNVGjeVWvhps",
  authDomain: "personal-329913.firebaseapp.com",
  projectId: "personal-329913",
  storageBucket: "personal-329913.appspot.com",
  messagingSenderId: "239128157221",
  appId: "1:239128157221:web:5bbdd3174ae8bb515073cc"
};    
  
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const auth = getAuth();

export function signInWithGoogle(){
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    createUserProfile(user)
  }).catch((error) => {
    //handle error
  });
}

export function signUpWithEmailAndPassword(data){
  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    createUserProfile({displayName : data.displayName, email : data.email,photoURL : '', uid : user.uid})
  })
  .catch((error) => {
    // handle error
  });
}

export function loginWithEmailAndPassword(data){
  signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    createUserProfile(user)
  })
  .catch((error) => {
    // handle error
  });
}

const db = getFirestore();

export async function createUserProfile(user){
  if(user){
    const createdAt = new Date();
    const data = {
      userName : user.displayName,
      userEmail : user.email,
      profile : user.photoURL,
      createdAt : createdAt,
    }
    try {
      if(user.uid){
        await setDoc(doc(db, "users",user.uid), data);
      } else{
        const docRef = await addDoc(collection(db, "users"), data);
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}

export async function getUserDetailsFromDatabase(user){
  if(user){
    if(user.uid){
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  }
}