import React from 'react';
import './joinModal.css';
import { signInWithPopup, getAdditionalUserInfo } from 'firebase/auth';
import { auth, provider,db } from '../Firebase';
import {  collection, addDoc } from "firebase/firestore";
const JoinModal = ({ onClose }) => {

    const handleGoogleAuth = () => {
        try {
          signInWithPopup(auth, provider)
            .then((result) => {
              
              const user = result.user;
              const additionalUserInfo = getAdditionalUserInfo(result);
    
          
              if (additionalUserInfo?.isNewUser) {
                
                const usersCollectionRef = collection(db, 'users');
                addDoc(usersCollectionRef, {
                  userId: user.uid,
                  displayName: user.displayName,
                  email: user.email,
                
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      };
    

  return (
    <div className="join-modal-overlay">
      <div className="join-modal">
        <div className="close-icon" onClick={onClose}>
          <span>&times;</span>
        </div>
        <h2>Join Our Community</h2>
        <p>Choose an option to join:</p>
        <div className="join-options">
          <button className="google-button" onClick={handleGoogleAuth}>
            <img src="src\assets\google.png" alt="Google" />
            Sign Up/In with Google
          </button>
          
          {/* Add more sign-up options as desired */}
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
