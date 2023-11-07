/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loggedInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

     //update profile
     const updateOnProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      }) 
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            const userEmail = currentUser?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            console.log("currentUser", currentUser);
            setLoading(false);

            ////////////// JWT Function 
            if (currentUser) {
                axios
                  .post("http://localhost:5000/jwt", loggedUser, { withCredentials: true })
                  .then((res) => {
                    console.log("Get Tokens", res.data);
                  })
                  .catch((error) => {
                    console.error("Error getting tokens:", error);
                  });
              } else {
                axios
                  .post("http://localhost:5000/logout", loggedUser, { withCredentials: true })
                  .then((res) => {
                    console.log("Get Log Out", res.data);
                  })
                  .catch((error) => {
                    console.error("Error logging out:", error);
                  });
              }
        });
        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {user, loading, googleLogin, createUser, loggedInUser, logoutUser, updateOnProfile }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;