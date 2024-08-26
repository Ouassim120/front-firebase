// src/SignIn.js
import React, { useState } from "react";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Signed in successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
