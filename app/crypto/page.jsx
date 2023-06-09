"use client";
import { useState } from "react";
import CryptoGainers from "../CryptoGainers";
import CryptoLosers from "../CryptoLosers";
import Crypto from "../AllCrypto";
import { Stack, Button } from "@mui/material";
// import "../stocks/styles.css";

export default function AllCrypto() {
  const [tableView, setTableView] = useState("Crypto");

  return (
    <div style={{ backgroundColor: "#f7f5f9" }}>
      <Stack spacing={7} direction="row" padding={5} justifyContent="center" style={{ backgroundColor: "#f7f5f9" }}>
        <Button
          variant="outlined"
          style={{
            textDecoration: "none",
            fontFamily: "Poppins",
          }}
          sx={{ color: "#53588c", borderColor: "#53588c" }}
          onClick={() => setTableView("Crypto")}
        >
          Crypto
        </Button>
        <Button
          variant="outlined"
          style={{
            textDecoration: "none",
            fontFamily: "Poppins",
          }}
          sx={{ color: "#53588c", borderColor: "#53588c" }}
          onClick={() => setTableView("CryptoGainers")}
        >
          Gainers
        </Button>
        <Button
          variant="outlined"
          style={{
            textDecoration: "none",
            fontFamily: "Poppins",
          }}
          sx={{ color: "#53588c", borderColor: "#53588c" }}
          onClick={() => setTableView("CryptoLosers")}
        >
          Losers
        </Button>
      </Stack>
      <div>
        {tableView === "Crypto" ? (
          <Crypto />
        ) : tableView === "CryptoGainers" ? (
          <CryptoGainers />
        ) : (
          <CryptoLosers />
        )}
      </div>
    </div>
  );
}
