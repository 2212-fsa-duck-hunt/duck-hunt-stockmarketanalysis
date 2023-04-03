"use client";
import { useState } from "react";
import SP500 from "../S&P500Table";
import TopGainers from "../TopGainers";
import TopLosers from "../TopLosers";
import { Stack, Button } from "@mui/material";
import "./styles.css";

export default function Stocks() {
  const [tableView, setTableView] = useState("S&P500");

  return (
    <div className="AllStocks">
      <Stack spacing={7} direction="row" margin={5} justifyContent="center">
        <Button
          variant="outlined"
          style={{
            textDecoration: "none",
            fontFamily: "Poppins",
          }}
          sx={{ color: "#53588c", borderColor: "#53588c" }}
          onClick={() => setTableView("S&P500")}
        >
          {"S&P 500"}
        </Button>
        <Button
          style={{
            textDecoration: "none",
            fontFamily: "Poppins",
          }}
          variant="outlined"
          sx={{ color: "#53588c", borderColor: "#53588c" }}
          onClick={() => setTableView("TopGainers")}
        >
          Gainers
        </Button>
        <Button
          style={{
            textDecoration: "none",
            fontFamily: "Poppins",
          }}
          variant="outlined"
          sx={{ color: "#53588c", borderColor: "#53588c" }}
          onClick={() => setTableView("TopLosers")}
        >
          Losers
        </Button>
      </Stack>
      <div>
        {tableView === "S&P500" ? (
          <SP500 />
        ) : tableView === "TopGainers" ? (
          <TopGainers />
        ) : (
          <TopLosers />
        )}
      </div>
    </div>
  );
}
