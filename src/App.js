import './App.scss';
import React, { useEffect } from 'react';
import HomepageComponent from './Pages/Homepage';
import OnboardingComponent from './Pages/Onboarding';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/Header/index';
import ShopComponent from './Pages/Shop/index';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { signIn, signOutAction } from './Redux/User/action';
import {getUserDetailsFromDatabase} from './Firebase/Firebase.util';

const  App = () => {
  // unsubScribeFromAuth = null
  const dispatch = useDispatch();
  const signOutofApp = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('logout success');
      dispatch(signOutAction())
    }).catch((error) => {
      // An error happened.
    });
  }

  const checkLoggedInStatus = async() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserDetailsFromDatabase(user)
        dispatch(signIn({
          displayName : userData.userName,
          email : user.email,
          profile : user.photoURL,
          accessToken : user.accessToken
        }))
        
      } 
    });
  }

  useEffect(()=>{
    checkLoggedInStatus()
  },[])

  return (
    <BrowserRouter>
      <HeaderComponent signOutofApp={signOutofApp}/>
      <Routes>
        <Route exact path="/" element={<HomepageComponent />} />
        <Route exact path="/sign-in" element={<OnboardingComponent />} />
        <Route exact path="/shop" element={<ShopComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
