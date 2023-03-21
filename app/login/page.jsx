"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Router, { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMsg, setSignUpMsg] = useState("");
  const router = useRouter();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSignUpMsg("Successful");
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setSignUpMsg(errorMessage);
      });
  };

  const signOut = () => {};

  return (
    <div id="home-container">
      <div id="home-icon-container4">
        <div>
          <h1>Login</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={signIn}
          >
            <div>
              <TextField
                required
                id="standard-required"
                label="Email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="standard"
              />
            </div>
            <Button type="submit" variant="text">
              Login
            </Button>
            <>{signUpMsg}</>
          </Box>
        </div>
      </div>
    </div>
  );
}
