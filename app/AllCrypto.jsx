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

  console.log("stock.results =======>", stock.results);

  if (!stock.status) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <h1 style={{ color: "#343757" }}>Fetching the latest market data</h1>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 450, maxWidth: 1500, margin: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "#9599c7",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
              >
                Crypto
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#9599c7",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
              >
                Ticker
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#9599c7",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
                align="right"
              >
                Price
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#9599c7",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
                align="right"
              >
                Previous Close
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#9599c7",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
                align="right"
              >
                Change
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#9599c7",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
                align="right"
              >
                % Change
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#9599c7",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
                align="center"
              >
                Add To Watch List
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stock.results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                let change = () => {
                  if (data.session.change > 0)
                    return {
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      color: "green",
                    };
                  else {
                    return {
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      color: "red",
                    };
                  }
                };

                return (
                  <TableRow hover key={data.name}>
                    <TableCell>
                      <Link
                        href={`/crypto/${data.ticker.slice(2, -3)}`}
                        style={{ textDecoration: "none", color: "#343757" }}
                      >
                        {data.name.slice(0, -23)}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/crypto/${data.ticker.slice(2, -3)}`}
                        style={{ textDecoration: "none", color: "#343757" }}
                      >
                        {data.ticker.slice(2, -3)}
                      </Link>
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Poppins",
                        verticalAlign: "70%",
                      }}
                    >
                      {data.session.change < 0 ? (
                        <ArrowDropDownIcon color="error" />
                      ) : (
                        <ArrowDropUpIcon color="success" />
                      )}
                      $
                      {data.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      $
                      {data.session.previous_close.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TableCell>
                    <TableCell style={change()} align="right">
                      ${data.session.change.toFixed(2)}
                    </TableCell>
                    <TableCell style={change()} align="right">
                      ({data.session.change_percent.toFixed(2)}%)
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ color: "#53588c", borderColor: "#53588c" }}
                        variant="outlined"
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
          count={30}
          rowsPerPageOptions={[10, 25]}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ maxWidth: 1700 }}
        />
      </TableContainer>
    </Box>
  );
}
