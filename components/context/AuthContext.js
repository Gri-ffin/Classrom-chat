import React, { useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import app from '../Helpers/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const auth = getAuth();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // listen to the change of the user on each render
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe();
  }, []);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
