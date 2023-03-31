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


  return (
    loggedIn ? 
    <div className='watchlistPage'>
      <h1 id="headerText" style={{ color: '#ffffff', textAlign: 'center'}}>  Watchlist </h1>
      <DataTable />
  </div> :
  <div className='watchlistPage'>
    <h1 style={{ color: '#ffffff' }} className="loadingText">Loading your watchlist</h1>
    <h2 style={{ color: '#ffffff' }} className="loadingText">Not logged in?</h2>
    <h3 style={{ color: '#ffffff' }} className="loadingText">Log in <a href='/login'>here</a> or sign up <a href='/signup'>here</a></h3>
  </div>  
  )

  
  

}