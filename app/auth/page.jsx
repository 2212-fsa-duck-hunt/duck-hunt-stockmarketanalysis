"use client";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Button from "@mui/material/Button";
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
        <div>
          {authUser ? (
            <>
              {" "}
              <p>Currently: Signed in</p>
              <Button onClick={userSignOut}>Sign Out</Button>
            </>
          ) : (
            <p>Signed Out</p>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
