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
import { Alert, Snackbar, AlertTitle } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function DataTable() {
  const [watchlist, setWatchlist] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [watchlistSymbols, setWatchlistSymbols] = useState([]);
  const [successAlert, setSuccessAlert] = useState(false);

  const [timestamper, setTimestamper] = useState('')
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (loggedInUser) => {
      if (loggedInUser) {
        setLoggedIn(true);
        setUser(loggedInUser);
      } else {
        console.log("Logged out");
      }
    });
  }, [user]);

  useEffect(() => {
    const getWatchlist = () => {
      if (user.uid) {
        const watchlistRef = doc(db, "watchlist", user.uid);
        getDoc(watchlistRef)
          .then((e) => {
            if (e.data() && watchlistSymbols[0] !== e.data().symbols[0]) {
              setWatchlistSymbols(e.data().symbols);
              setTimestamper(e.data().timestamp);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    const fetchData = () => {
      let tempWatchlist = [];
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
            setIsEmpty(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getWatchlist();

    if (watchlistSymbols.length) {
      fetchData();
    }
  }, [user.uid, watchlistSymbols]);

  return isEmpty || !watchlist.length ? (
    <div style={{ color: "#1f2033", textAlign: "center" }}>
      <h3>Watchlist is empty</h3>
    </div>
  ) : (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ height: 800, backgroundColor: "inherit" }}
      >
        <Table
          sx={{
            minWidth: 450,
            maxWidth: 1500,
            margin: "auto",
            height: "max-content",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                ID
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                Name
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                Symbol
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                Open
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                High
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                Low
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                Close
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
              >
                Volume
              </TableCell>
              {/* <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
                align="center"
              >
                % Change
              </TableCell> */}
              <TableCell
                style={{ backgroundColor: "#292032", color: "#ffffff" }}
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
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    {data.id}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    <Link href={`/stocks/${data.symbol}`}>{data.name}</Link>
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    <Link href={`/stocks/${data.symbol}`}>{data.symbol}</Link>
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    ${data.open.toFixed(2)}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    ${data.high.toFixed(2)}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    ${data.low.toFixed(2)}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    ${data.close.toFixed(2)}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                  >
                    {data.volume}
                  </TableCell>
                  <TableCell
                    style={{ backgroundColor: "#e0e2ef", color: "#1f2033" }}
                    align="center"
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
                            // console.log(
                            //   "Document has been deleted successfully"
                            // );
                            setSuccessAlert(true);
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
      <Snackbar
        open={successAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={() => setSuccessAlert(false)}
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle> Deleted from watchlist
        </Alert>
      </Snackbar>
    </Box>
  );
}
