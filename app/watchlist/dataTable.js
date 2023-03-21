

import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", type: "number", width: 70 },
  { field: "symbol", headerName: "Symbol", type: "number", width: 200 },
  { field: "open", headerName: "Open", type: "number", width: 200 },
  { field: "high", headerName: "High", type: "number", width: 200 },
  { field: "low", headerName: "Low", type: "number", width: 200 },
  { field: "close", headerName: "Close", width: 150, type: "number" },
  { field: "volume", headerName: "Volume", type: "number", width: 200 },
];

const rows = [
  {
    id: 1,
    symbol: "IBM",
    open: "122.99",
    high: "123.35",
    low: "121.71",
    close: "123.28",
    volume: "5989339",
  },
  {
    id: 2,
    symbol: "AAPL",
    open: "156.08",
    high: "156.74",
    low: "154.28",
    close: "155.0",
    volume: "98810371",
  },
  {
    id: 3,
    symbol: "MSFT",
    open: "278.26",
    high: "283.33",
    low: "276.32",
    close: "279.43",
    volume: "69482125",
  },
  {
    id: 4,
    symbol: "AMZN",
    open: "99.79",
    high: "100.66",
    low: "97.46",
    close: "98.95",
    volume: "87159608",
  },
  {
    id: 5,
    symbol: "NVDA",
    open: "259.82",
    high: "263.99",
    low: "256.68",
    close: "257.25",
    volume: "84676265",
  },
  {
    id: 6,
    symbol: "GOOGL",
    open: "100.26",
    high: "102.84",
    low: "100.1",
    close: "101.62",
    volume: "60970721",
  },
  {
    id: 7,
    symbol: "BRK.B",
    open: "296.37",
    high: "304.43",
    low: "295.36",
    close: "302.01",
    volume: "6327578",
  },
  {
    id: 8,
    symbol: "AMD",
    open: "96.66",
    high: "98.75",
    low: "95.94",
    close: "97.84",
    volume: "93995970",
  },
  {
    id: 9,
    symbol: "TSLA",
    open: "184.52",
    high: "186.22",
    low: "177.33",
    close: "180.13",
    volume: "132886121",
  },
];

// let rows2 = [];

// async function fetchData(symbol) {
//   const res = await fetch(
//     `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=RZJQXAG8821I0VLQ`
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
// async function fetchData2(symbol) {
//   const res = await fetch(
//     `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=UIM79FIZX37HH3NH`
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }




export default function DataTable() {

  // if (!localStorage.watchlist) {
  //   rows2 = [];
  // } else {
  //   const watchlistSymbols = JSON.parse(localStorage.watchlist);

  //   watchlistSymbols.map(async (stock, idx) => {
  //     if (idx > 5) {
  //       let data = await fetchData(stock);

  //       let yourDate = new Date();
  //       yourDate.toISOString().split("T")[0];
  //       const offset = yourDate.getTimezoneOffset();
  //       yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);

  //       let stockInfo =
  //         data["Time Series (Daily)"][yourDate.toISOString().split("T")[0]];
  //       console.log(data);
  //       if (stockInfo) {
  //         stock = {
  //           id: idx,
  //           symbol: data["Meta Data"].Symbol,
  //           open: stockInfo.open,
  //           high: stockInfo.high,
  //           low: stockInfo.low,
  //           close: stockInfo.close,
  //           volume: stockInfo.volume,
  //         };
  //       }
  //     } else {
  //       let data = await fetchData2(stock);

  //       let yourDate = new Date();
  //       yourDate.toISOString().split("T")[0];
  //       const offset = yourDate.getTimezoneOffset();
  //       yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);

  //       let stockInfo =
  //         data["Time Series (Daily)"][yourDate.toISOString().split("T")[0]];

  //       stock = {
  //         id: idx,
  //         symbol: data["Meta Data"].Symbol,
  //         open: stockInfo.open,
  //         high: stockInfo.high,
  //         low: stockInfo.low,
  //         close: stockInfo.close,
  //         volume: stockInfo.volume,
  //       };
  //     }
  //   });
  // }

    return (
      <div style={{ height: 600, width: "100%", margin: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          hideFooterPagination
        />
      </div>
    );
}
