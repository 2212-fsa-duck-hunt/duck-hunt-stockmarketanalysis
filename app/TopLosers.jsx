import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Link
} from "@mui/material";

import { useState } from "react";

// async function getStocks() {
//   const res = await fetch(
//     "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=zvIUoDFvdzsmXDT5O433FWNsfmzd5sKD"
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const result = await res.json();

//   return result;
// }

const dummyData = [
  {
    name: "Top Losers",
    symbol: "AAPL",
    day: "1.5%",
    month: "-1.5%",
    year: "3.0%",
    prediction: "Up",
  },
  {
    name: "Microsoft Corporation",
    symbol: "MSFT",
    day: "3.0%",
    month: "-2.0%",
    year: "5.0%",
    prediction: "Down",
  },
  {
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    day: "0.5%",
    month: "-0.5%",
    year: "2.0%",
    prediction: "Up",
  },
  {
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    day: "0.5%",
    month: "-5.0%",
    year: "1.0%",
    prediction: "Down",
  },
  {
    name: "Alphabet Inc. Class A",
    symbol: "GOOGL",
    day: "4.0%",
    month: "-3.0%",
    year: "10.0%",
    prediction: "Up",
  },
  {
    name: "Berkshire Hathaway Inc. Class B",
    symbol: "BRK.B",
    day: "1.0%",
    month: "-1.0%",
    year: "7.0%",
    prediction: "Down",
  },
  {
    name: "Alphabet Inc. Class C",
    symbol: "GOOG",
    day: "0.5%",
    month: "-0.5%",
    year: "3.0%",
    prediction: "Up",
  },
  {
    name: "Tesla Inc.",
    symbol: "TSLA",
    day: "4.0%",
    month: "-10.0%",
    year: "12.0%",
    prediction: "Down",
  },
  {
    name: "Meta Platforms Inc. Class A",
    symbol: "META",
    day: "1.5%",
    month: "-1.5%",
    year: "3.0%",
    prediction: "Up",
  },
  {
    name: "UnitedHealth Group Incorporated",
    symbol: "UNH",
    day: "1.5%",
    month: "-3.0%",
    year: "3.0%",
    prediction: "Down",
  },
];

let tempWatchlist = [];

export default function TopLosers() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [stock, setStock] = useState({});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  if (localStorage.watchlist) {
    tempWatchlist = JSON.parse(localStorage.watchlist);
  }

  // useEffect(() => {
  //   if (!stock.status) {
  //     const fetchStocks = async () => {
  //       const stocks = await getStocks();
  //       setStock(stocks);
  //     };
  //     fetchStocks();
  //   }
  //   console.log("STOCKS:", stock);
  // }, [stock]);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450, maxWidth: 1500, margin: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Stock Name / Symbol
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Symbol
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                1D CHG%
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                1M CHG%
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                1Y CHG%
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                1M Prediction
              </TableCell>
              <TableCell style={{ backgroundColor: "black", color: "white" }}>
                Add To Watch List
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow key={data.name}>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.symbol}</TableCell>
                    <TableCell>{data.day}</TableCell>
                    <TableCell>{data.month}</TableCell>
                    <TableCell>{data.year}</TableCell>
                    <TableCell>{data.prediction}</TableCell>
                    <TableCell>                      
                      <Link component="button" onClick={() => {
                        if (tempWatchlist.length > 10) {
                          alert("Watchlist is full");
                          return;
                        }
                        if (tempWatchlist.includes(data.symbol)) {
                          alert(`Watchlist already contains ${data.name}`);
                          return;
                        }
                        else {
                          tempWatchlist.push(data.symbol);
                          localStorage.watchlist = JSON.stringify(tempWatchlist);
                        }
                        }}>
                        Add
                      </Link></TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          component={"div"}
          count={10}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
