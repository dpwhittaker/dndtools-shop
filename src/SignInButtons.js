import React from 'react';
import { signInWithGoogle, signInWithFacebook, signOut } from './firebase';

const SignInButtons = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log('Signed in with Google');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
      console.log('Signed in with Facebook');
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <button onClick={handleFacebookSignIn}>Sign in with Facebook</button>
    </div>
  );
};

const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
      console.log('Signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return <button onClick={handleSignOut}>Sign out</button>;
};

export {SignInButtons, SignOutButton};