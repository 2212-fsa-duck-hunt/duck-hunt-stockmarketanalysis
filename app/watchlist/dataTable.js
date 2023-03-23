"use client";

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Button } from "@mui/material";



// const RenderImage = (value) => {
//   console.log("value.row.iconUrl--------",value.row.iconUrl)
//   return (
//     <>
//       <Avatar src={value.row.iconUrl} />
//     </>
//   );
// };

const columns = [
  { field: "id", headerName: "ID", type: "number", width: 70 },
  // {
  //   field: 'icon',
  //   headerName: '',
  //   renderCell: RenderImage,
  // },
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
  const [selectedStock, setSelectedStock] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [buttonVisible, setButtonVisible] = useState(false)

  useEffect(() => {
    if (!watchlist.length) {
      fetchData();
    }
  }, []);

  const deleteSelected = () => {
    const filteredWatchlist = watchlist.filter((item) => !selectedStock.includes(item));
    setStockList(filteredWatchlist);
  }

  const fetchData = async () => {
    let tempWatchlist = [];

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

    for (let i = 0; i < watchlistSymbols.length; i++) {
      await fetch(
        `https://api.polygon.io/v1/summaries?ticker.any_of=${watchlistSymbols[i]}&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj`,
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
            let stockInfo = data.results[0];
            console.log("data.results[0]-------", data.results[0]);
            let stock = {
              id: i + 1,
              iconUrl:
                stockInfo.branding.icon_url +
                "?apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
              symbol: stockInfo.ticker,
              open: stockInfo.session.open,
              high: stockInfo.session.high,
              low: stockInfo.session.low,
              close: stockInfo.session.close,
              volume: stockInfo.session.volume,
            };
            tempWatchlist.push(stock);
          }
        });
    }
    console.log("tempWatchlist------", tempWatchlist);
    setWatchlist(tempWatchlist);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (buttonVisible) {
    return (
      <div style={{ height: 400, width: "100%", margin: "auto" }}>
        <Button variant="contained">Remove Selected</Button>
        <DataGrid
          rows={watchlist}
          columns={columns}
          hideFooterPagination={true}
          checkboxSelection
          // onSelectionModelChange={({ selectionModel }) => {
          //   setButtonVisible(true);
          //   setSelectedStock(selectionModel);
          // }}
        />
      </div>
    );
  } else {
    return (
      <div style={{ height: 400, width: "100%", margin: "auto" }}>
        <Button variant="contained" disabled>
          Remove Selected
        </Button>
        <DataGrid
          rows={watchlist}
          columns={columns}
          hideFooterPagination={true}
          checkboxSelection
          // onRowSelectionModelChange={(selectionModel) => {
          //   console.log(selectionModel);
          //   setButtonVisible(true);
          //   setSelectedStock(selectionModel);
          // }}
        />
      </div>
    );
  }

}
