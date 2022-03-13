import './App.scss';
import React from 'react';
import HomepageComponent from './Pages/Homepage/Homepage.component';
import OnboardingComponent from './Pages/Onboarding/Onboarding.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/Header/Header.component';
import ShopComponent from './Pages/Shop/Shop.component';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
class App extends React.Component {

  unsubScribeFromAuth = null
  constructor(){
    super();
    this.state = {
      userName  : null,
      userEmail : null,
      accessToken : null,
      profile : null
    }
  }

  signOutofApp = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('logout success');
      this.setState({
        userName  : null,
        userEmail : null,
        accessToken : null,
        profile : null
      })
    }).catch((error) => {
      // An error happened.
    });
  }

  componentDidMount(){
    const auth = getAuth();
    this.unsubScribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({
          userName : user.displayName,
          userEmail : user.email,
          profile : user.photoURL,
          accessToken : user.accessToken
        })
      } 
    });
  }

  componentWillUnmount(){
    this.unsubScribeFromAuth();//close the subscription.
  }

  render(){
    return (
      <BrowserRouter>
        <HeaderComponent userName={this.state.userName} signOutofApp={this.signOutofApp}/>
        <Routes>
          <Route exact path="/" element={<HomepageComponent />} />
          <Route exact path="/sign-in" element={<OnboardingComponent />} />
          <Route exact path="/shop" element={<ShopComponent />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
