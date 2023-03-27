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


let watchlistSymbols = [];


if (typeof window !== "undefined") {
  if (localStorage.watchlist) {
    watchlistSymbols = JSON.parse(localStorage.watchlist);
  } else {
    watchlistSymbols = [];
    localStorage.watchlist = watchlistSymbols;
  }
}


export default function DataTable() {
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!watchlist.length) {
      fetchData();
    }
  }, []);


  const fetchData = () => {
    let tempWatchlist = [];

    //date conversion to yyyy-mm-dd and also if time is before stock market closes, use yesterday's data
    let yourDate = new Date();
    if (yourDate.getHours() > 13) {
      yourDate.toISOString().split("T")[0];
      const offset = yourDate.getTimezoneOffset();
      yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
      console.log("today-----", yourDate);
    } else {
      let yesterday = new Date(yourDate);
      yesterday.setDate(yesterday.getDate() - 1);
      yesterday.toISOString().split("T")[0];
      const offset = yesterday.getTimezoneOffset();
      yourDate = new Date(yesterday.getTime() - offset * 60 * 1000);
      console.log("yesterday-----", yourDate);
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
        console.log("new data-------", data);
        if (data.status === 'OK') {
          for (let i = 0; i < data.results.length; i++) {
            let stockInfo = data.results[i];
            console.log("data.results[i]", data.results[i]);
            let stock = {
              id: i + 1,
              icon: stockInfo.branding.icon_url,
              name: stockInfo.name,
              symbol: stockInfo.ticker,
              open: stockInfo.session.open,
              high: stockInfo.session.high,
              low: stockInfo.session.low,
              close: stockInfo.session.close,
              volume: stockInfo.session.volume,
            };
            tempWatchlist.push(stock)
          }
        }
        console.log("tempWatchlist------", tempWatchlist);
        setWatchlist(tempWatchlist);
        setIsLoading(false);
      });
    }

  if (isLoading) {
    return <div>Loading...</div>;
  }

    return (
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450, maxWidth: 1500, margin: "auto" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff' }}>
                  ID
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  Name
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  Symbol
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  Open
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  High
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  Low
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  Close
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  Volume
                </TableCell>
                <TableCell style={{ backgroundColor: "#000000", color: '#ffffff'  }}>
                  Remove from watchlist
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
                      {data.name}
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: "#212021", color: "#ffffff" }}
                    >
                      {data.symbol}
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
                          let tempWatchlist = [];
                          tempWatchlist = watchlist.filter(
                            (stock) => stock.id !== data.id
                          );
                          setWatchlist(tempWatchlist);
                          localStorage.watchlist = JSON.stringify(
                            tempWatchlist.map((stock) => (stock = stock.symbol))
                          );
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
}

