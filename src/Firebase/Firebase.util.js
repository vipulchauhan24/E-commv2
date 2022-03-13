import {initializeApp} from 'firebase/app';
// import 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBrH8F9WxuKcijDPZ5XVZJLNVGjeVWvhps",
    authDomain: "personal-329913.firebaseapp.com",
    projectId: "personal-329913",
    storageBucket: "personal-329913.appspot.com",
    messagingSenderId: "239128157221",
    appId: "1:239128157221:web:5bbdd3174ae8bb515073cc"
};    
  
const app = initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const auth = getAuth();
export function signInWithGoogle(){
    signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}

// export default firebase;