"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Router, { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMsg, setSignUpMsg] = useState("");
  const router = useRouter();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
            onSubmit={signUp}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant="h3" marginBottom={1} marginTop={10}>
              Signup
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
              Signup
            </Button>
            <>{signUpMsg}</>
          </Box>
        </div>
      </div>
    </div>
  );
}
