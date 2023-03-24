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
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
    return <h1>Loading</h1>;
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
                Stock Name
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
                  <TableRow key={data.name}>
                    <TableCell>{data.name.slice(0, -23)}</TableCell>
                    <TableCell>{data.ticker.slice(2, -3)}</TableCell>
                    <TableCell>${dollarUSLocale.format(data.price)}</TableCell>
                    <TableCell>${data.session.previous_close}</TableCell>
                    <TableCell style={change()}>
                      {data.session.change < 0 ? (
                        <ArrowDropDownIcon color="error" />
                      ) : (
                        <ArrowDropUpIcon color="success" />
                      )}
                      ${data.session.change}
                    </TableCell>
                    <TableCell style={change()}>
                      {data.session.change_percent < 0 ? (
                        <ArrowDropDownIcon color="error" />
                      ) : (
                        <ArrowDropUpIcon color="success" />
                      )}
                      {data.session.change_percent}%
                    </TableCell>
                    <TableCell>
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
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
