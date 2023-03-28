"use client";
import { useState } from "react";
import SP500 from "../S&P500Table";
import TopGainers from "../TopGainers";
import TopLosers from "../TopLosers";
import { Stack, Button } from "@mui/material";

export default function Stocks() {
  const [tableView, setTableView] = useState("S&P500");

  return (
    <div>
      <Stack spacing={7} direction="row" margin={5} justifyContent="center">
        <Button
          variant="outlined"
          style={{
            color: "black"
          }
          }
          onClick={() => setTableView("S&P500")}
        >
          {"S&P 500"}
        </Button>
        <Button
          variant="outlined"
          
          style={{
            color: "black"
          }
          }
          onClick={() => setTableView("TopGainers")}
        >
          Gainers
        </Button>
        <Button
          variant="outlined"
          style={{
            color: "black"
          }
          }
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
