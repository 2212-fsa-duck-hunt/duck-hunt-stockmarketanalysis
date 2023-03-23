"use client";
import { useState } from "react";
import SP500 from "../S&P500Table";
import TopGainers from "../TopGainers";
import TopLosers from "../TopLosers";
import Crypto from "../AllCrypto";
import { Stack, Button } from "@mui/material";

export default function Stocks() {
  const [tableView, setTableView] = useState("S&P500");

  return (
    <div>
      <Stack spacing={7} direction="row" margin={5} justifyContent="center">
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => setTableView("S&P500")}
        >
          {"S&P 500"}
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => setTableView("Crypto")}
        >
          Crypto
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => setTableView("TopGainers")}
        >
          Top Gainers
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => setTableView("TopLosers")}
        >
          Top Losers
        </Button>
      </Stack>
      <div>
        {tableView === "S&P500" ? (
          <SP500 />
        ) : tableView === "Crypto" ? (
          <Crypto />
        ) : tableView === "TopGainers" ? (
          <TopGainers />
        ) : (
          <TopLosers />
        )}
      </div>
    </div>
  );
}
