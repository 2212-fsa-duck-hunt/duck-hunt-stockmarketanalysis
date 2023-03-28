"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Router, { useRouter } from "next/navigation";
import Link from "next/link";

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
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={signIn}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant="h3" marginBottom={1} marginTop={10}>
              Login
            </Typography>
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              Login
            </Button>
            <Typography marginTop={2}>
              Need an account? <Link href="/signup">Signup</Link>
            </Typography>
            <>{signUpMsg}</>
          </Box>
        </div>
      </div>
    </div>
  );
}
