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
  Button,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useState, useEffect } from "react";

let tempWatchlist = [];

export default function CryptoLosers() {
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

  const handleChangeRowsPerPage = (event) => {
    const updatedChangeRowsPerPage = parseInt(event.target.value);
    setRowsPerPage(updatedChangeRowsPerPage);
    setPage(0);
  };

  useEffect(() => {
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=X:BTCUSD,X:ETHUSD,X:USDTUSD,X:USDCUSD,X:XRPUSD,X:ADAUSD,X:DOGEUSD,X:MATICUSD,X:SOLUSD,X:DOTUSD,X:LTCUSD,X:SHIBUSD,X:TRXUSD,X:AVAXUSD,X:DAIUSD,X:UNIUSD,X:NEARUSD,X:LINKUSD,X:ATOMUSD,X:CHZUSD,X:ETCUSD,X:XMRUSD,X:SANDUSD,X:ZECUSD,X:BCHUSD,X:XLMUSD,X:FILUSD,X:MASKUSD,X:MKRUSD,X:HBARUSD&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
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
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <h1>Fetching the latest market data</h1>
        <CircularProgress />
      </Box>
    );
  }

  const sortedStock = stock.results
    .sort(
      (firstItem, secondItem) =>
        firstItem.session.change_percent - secondItem.session.change_percent
    )
    .filter((elem) => elem.session.change_percent < 0);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450, maxWidth: 1500, margin: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Crypto
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Ticker
              </TableCell>
              <TableCell
                style={{ backgroundColor: "black", color: "white" }}
                align="right"
              >
                Price
              </TableCell>
              <TableCell
                style={{ backgroundColor: "black", color: "white" }}
                align="right"
              >
                Previous Close
              </TableCell>
              <TableCell
                style={{ backgroundColor: "black", color: "white" }}
                align="right"
              >
                Change
              </TableCell>
              <TableCell
                style={{ backgroundColor: "black", color: "white" }}
                align="right"
              >
                % Change
              </TableCell>
              <TableCell
                style={{ backgroundColor: "black", color: "white" }}
                align="center"
              >
                Add To Watch List
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedStock
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                let change = () => {
                  if (data.session.change > 0) return { color: "green" };
                  else {
                    return { color: "red" };
                  }
                };
                let dollarUSLocale = Intl.NumberFormat("en-US");

                return (
                  <TableRow hover key={data.name}>
                    <TableCell>
                      <Link href={`/stocks/${data.ticker}`}>
                        {data.name.slice(0, -23)}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/stocks/${data.ticker}`}>
                        {data.ticker.slice(2, -3)}
                      </Link>
                    </TableCell>
                    <TableCell align="right" style={{ verticalAlign: "70%" }}>
                      {data.session.change < 0 ? (
                        <ArrowDropDownIcon color="error" />
                      ) : (
                        <ArrowDropUpIcon color="success" />
                      )}
                      ${dollarUSLocale.format(data.price.toFixed(2))}
                    </TableCell>
                    <TableCell align="right">
                      ${data.session.previous_close.toFixed(2)}
                    </TableCell>
                    <TableCell style={change()} align="right">
                      ${data.session.change.toFixed(2)}
                    </TableCell>
                    <TableCell style={change()} align="right">
                      ({data.session.change_percent.toFixed(2)}%)
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        component="button"
                        variant="outlined"
                        color="success"
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
                        <AddIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          component={"div"}
          count={sortedStock.length}
          rowsPerPageOptions={[10, 25]}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
