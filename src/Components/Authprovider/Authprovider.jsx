// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import React, { createContext, useState } from 'react';
// import auth from '../../Firebase/Firebase'; 
// export const AuthContext=createContext(null)
// const Authprovider = ({children}) => {
//     const [user,setUser]=useState(null)
//     const [loading,setloading]=useState(true)
//     const createuserEmail=(email,password)=>{
//         setloading(true)
//         return createUserWithEmailAndPassword(auth,email,password)
//     }
//     const loginUserEmail=(email,password)=>{
//      return signInWithEmailAndPassword(auth,email,password)
//     }
//     const userInfo={
//         user,loading,createuserEmail,loginUserEmail
//     }
//     return (
//       <AuthContext.Provider value={userInfo}>
//        {children}
//       </AuthContext.Provider>
//     );
// };

// export default Authprovider;
import React, { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import app from '../../Firebase/Firebase';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createuserEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUserEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    };

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
            .finally(() => setLoading(false));
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createuserEmail,
        loginUserEmail,
        googleSignIn,
        githubSignIn,
        logOut,
        auth
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;