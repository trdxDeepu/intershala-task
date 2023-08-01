import React, { useState, useEffect } from 'react';
import './App.css';
import LogoImage from '../src/assets/red.png'
import Footer from './components/Footer';
import Applyjoin from './components/Applyjoin';
import HeroSection from './components/HeroSection';
import {auth} from './Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';


const App = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);



  const handleSignOut = () => {
      signOut(auth).then(()=>{
        alert("Signed out")
      }).catch((error )=>{
        alert("Error")
      })
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo-container">
            <img src={LogoImage} alt="Company Logo" className="logo" />
            <h1>Tech Hiring</h1>
          </div>
          </div>
          <div className="header-actions">
            {user ? (
              <div className="user-profile">
                <span className="welcome-msg">Welcome, {user.displayName}</span>
                <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
              </div>
            ) : (
              <></>
            )}
          
        </div>
      </header>

      <HeroSection />

      <Applyjoin />

      <Footer />
    </div>
  );
};

export default App;
