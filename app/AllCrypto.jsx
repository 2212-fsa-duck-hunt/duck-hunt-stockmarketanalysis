"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TablePagination,
  Link,
} from "@mui/material";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useState, useEffect } from "react";

let tempWatchlist = [];

export default function Crypto() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [stock, setStock] = useState({});

  if (typeof window !== "undefined") {
    if (localStorage.watchlist) {
      tempWatchlist = JSON.parse(localStorage.watchlist);
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=X:BTCUSD,X:ETHUSD,X:USDTUSD,X:USDCUSD,X:XRPUSD,X:ADAUSD,X:DOGEUSD,X:MATICUSD,X:SOLUSD,X:DOTUSD,X:LTCUSD,X:SHIBUSD,X:TRXUSD,X:AVAXUSD,X:DAIUSD,X:UNIUSD,X:BTCUSD,X:LINKUSD,X:ATOMUSD,X:CHZUSD,X:ETCUSD,X:XMRUSD,X:SANDUSD,X:ZECUSD,X:BCHUSD,X:XLMUSD,X:FILUSD,X:MASKUSD,X:MKRUSD,X:HBARUSD&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, []);

  if (!stock.status) {
    return <h1>Loading</h1>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450, maxWidth: 1500, margin: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Crypto Name
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Ticker
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Price
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Previous Close
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Total Change
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Change %
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Add To Watch List
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stock.results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                console.log("DATTTTA:", data);
                return (
                  <TableRow key={data.name}>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.ticker}</TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>{data.session.previous_close}</TableCell>
                    <TableCell>
                      {data.session.change < 0 ? (
                        <ArrowDropDownIcon color="error" />
                      ) : (
                        <ArrowDropUpIcon color="success" />
                      )}
                      {data.session.change}
                    </TableCell>
                    <TableCell>
                      {data.session.change_percent < 0 ? (
                        <ArrowDropDownIcon color="error" />
                      ) : (
                        <ArrowDropUpIcon color="success" />
                      )}
                      {data.session.change_percent}
                    </TableCell>
                    <TableCell>
                      <Link
                        component="button"
                        onClick={() => {
                          if (tempWatchlist.includes(data.ticker)) {
                            alert(`Watchlist already contains ${data.name}`);
                            return;
                          }
                          if (tempWatchlist.length > 4) {
                            alert("Watchlist is full");
                            return;
                          } else {
                            if (typeof window !== "undefined") {
                              tempWatchlist.push(data.ticker);
                              localStorage.watchlist =
                                JSON.stringify(tempWatchlist);
                            } else {
                              alert("localStorage is undefined");
                            }
                          }
                        }}
                      >
                        Add
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          component={"div"}
          count={30}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
