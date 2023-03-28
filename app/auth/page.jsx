"use client";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import Router, { useRouter } from "next/navigation";

export default function Auth() {
  const [authUser, setAuthUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signedout");
        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="home-container">
      <div id="home-icon-container4">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {authUser ? (
            <>
              {" "}
              <Typography variant="h4" marginBottom={1} marginTop={10}>
                Currently: Signed in
              </Typography>
              <Button
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
                size="large"
                onClick={userSignOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Typography variant="h4" marginTop={10}>
              Signed Out
            </Typography>
          )}{" "}
        </Box>
      </div>
    </div>
  );
}
