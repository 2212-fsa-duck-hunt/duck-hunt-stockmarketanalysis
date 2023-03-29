'use client';

import DataTable from './dataTable';
import React from "react";
import { useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import './styles.css'



export default function Watchlist() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user)=>{
      if(user){
          //do your logged in user crap here
          console.log("Logged in ")
          setLoggedIn(true);
      }else{
          console.log("Logged out");
      }
    })
  }, [])

  // if (typeof document !== 'undefined') {
  //   document.body.style = 'background: #11071B';
  // }
  if (!loggedIn) {
    return (
    <div>
      <h1 style={{ color: '#000000' }}>Not logged in</h1>
      <h2 style={{ color: '#000000' }}>Login <a href='/login'>here</a> or sign up <a href='/signup'>here</a></h2>
    </div>
    )
  } else
  return (
    <div>
        <h1 style={{ color: '#000000' }}> Watchlist </h1>
        <DataTable />
    </div>
  )
}