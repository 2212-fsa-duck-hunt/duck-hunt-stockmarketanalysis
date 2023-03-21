"use client"

import React, { useEffect, useState } from "react";
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

const dummyRows = [
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

const APIkeys = [
  "RZJQXAG8821I0VLQ",
  "UIM79FIZX37HH3NH",
  "E126YXAY0QM8RHBW",
  "UIRU4XA3796E26II",
  "DJFJZTCD7MV7JUDK",
  "3JA2XRZXYFT9JAEQ",
  "ZCBP5TEF90WF7UKZ",
  "4L2GCTYG7M99S6GB",
  "Y5EZRQP3F7QMJKN0",
];

const watchlistSymbols = JSON.parse(localStorage.watchlist);


export default function DataTable() {

  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (watchlist.length) {
      fetchData();
    }
  }, [])

  const fetchData = async () => {
    let tempWatchlist = [];

    let yourDate = new Date();
    yourDate.toISOString().split("T")[0];
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);

    for (let i = 0; i < watchlistSymbols.length; i++) {
      await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${watchlistSymbols[i]}&apikey=${APIkeys[i]}`)
            .then((response) => response.json())
            .then((data) => {
              console.log("data-------", data);
              let stockInfo =
                data["Time Series (Daily)"][yourDate.toISOString().split("T")[0]];
              console.log("stockInfo-----", stockInfo);
              let stock = {
                id: i + 1,
                symbol: data["Meta Data"]["2. Symbol"],
                open: stockInfo["1. open"],
                high: stockInfo["2. high"],
                low: stockInfo["3. low"],
                close: stockInfo["4. close"],
                volume: stockInfo["6. volume"],
              };
              tempWatchlist.push(stock);
            })
    }
    console.log("watchlist------", tempWatchlist)
    setWatchlist(tempWatchlist);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div style={{ height: 600, width: "100%", margin: "auto" }}>
      <DataGrid
        rows={watchlist}
        columns={columns}
        checkboxSelection
        hideFooterPagination
      />
    </div>
  );
}
