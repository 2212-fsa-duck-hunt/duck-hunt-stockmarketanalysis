"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./styles.css";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function DataTable() {
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [watchlistSymbols, setWatchlistSymbols] = useState([]);

  const router = useRouter();

 useEffect(() => {
  getWatchlist();
  fetchData();
 }, [watchlist]);

 useEffect(() => {
   onAuthStateChanged(auth, async (loggedInUser) => {
     if (loggedInUser) {
       //do your logged in user crap here
       console.log("Logged in ");
       setLoggedIn(true);
       setUser(loggedInUser);
     } else {
       console.log("Logged out");
     }
   });
 }, [user]);

 const getWatchlist = () => {
   if (user.uid) {
     const watchlistRef = doc(db, "watchlist", user.uid);
     getDoc(watchlistRef)
       .then((e) => {
          if (e.data()) {
            setWatchlistSymbols(e.data().symbols);
          } else {
            return;
          }
       })
       .catch((err) => {
         console.log(err);
       });
   }
 };

 const fetchData = () => {
   let tempWatchlist = [];
   //date conversion to yyyy-mm-dd and also if time is before stock market closes, use yesterday's data
   let yourDate = new Date();
   if (yourDate.getHours() > 13) {
     yourDate.toISOString().split("T")[0];
     //convert from UTC to PST
     const offset = yourDate.getTimezoneOffset();
     yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
   } else {
     let yesterday = new Date(yourDate);
     yesterday.setDate(yesterday.getDate() - 1);
     yesterday.toISOString().split("T")[0];
     //convert from UTC to PST
     const offset = yesterday.getTimezoneOffset();
     yourDate = new Date(yesterday.getTime() - offset * 60 * 1000);
   }
   fetch(
     `https://api.polygon.io/v1/summaries?ticker.any_of=${watchlistSymbols.join()}&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj`,
     {
       method: "GET",
       headers: {
         "X-Polygon-Edge-ID": "cool-big-id",
         "X-Polygon-Edge-IP-Address": "8.8.4.4",
       },
     }
   )
     .then((response) => response.json())
     .then((data) => {
       if (data.status === "OK") {
         for (let i = 0; i < data.results.length; i++) {
           let stockInfo = data.results[i];
           let stock = {
             id: i + 1,
             name: stockInfo.name,
             symbol: stockInfo.ticker,
             open: stockInfo.session.open,
             high: stockInfo.session.high,
             low: stockInfo.session.low,
             close: stockInfo.session.close,
             volume: stockInfo.session.volume,
           };
           tempWatchlist.push(stock);
         }

          setWatchlist(tempWatchlist);
          setIsLoading(false);

       }
     });
 };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450, maxWidth: 1500, margin: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                ID
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Name
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Symbol
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Open
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                High
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Low
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Close
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Volume
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#000000", color: "#ffffff" }}
              >
                Remove from watchlist
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table">
            {watchlist.map((data) => {
              return (
                <TableRow key={data.id}>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    {data.id}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    <Link href={`/stocks/${data.symbol}`}>{data.name}</Link>
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    <Link href={`/stocks/${data.symbol}`}>{data.symbol}</Link>
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    {data.open}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    {data.high}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    {data.low}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    {data.close}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    {data.volume}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#212021", color: "#ffffff" }}
                  >
                    <Button
                      color="error"
                      variant="outlined"
                      component="button"
                      onClick={() => {
                        const watchlistRef = doc(db, "watchlist", user.uid);

                        let newWatchlist = watchlist.filter(
                          (stock) => stock.id !== data.id
                        );

                        setWatchlist(newWatchlist);
                        let symbols = newWatchlist.map((e) => (e = e.symbol));

                        let tempWatchlistSymbols = symbols;
                        setWatchlistSymbols(tempWatchlistSymbols);

                        setDoc(watchlistRef, {
                          symbols: tempWatchlistSymbols,
                        })
                          .then(() => {
                            console.log(
                              "Document has been deleted successfully"
                            );
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      }}
                    >
                      <RemoveIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
