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

import { onAuthStateChanged } from "firebase/auth";
import { auth, firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Alert, Snackbar, AlertTitle } from "@mui/material";

import { useState, useEffect } from "react";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let currentWatchlist = [];
let timestampers = [];

export default function SP500() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [stock, setStock] = useState([]);
  const [stockTwo, setStockTwo] = useState([]);
  const [stockThree, setStockThree] = useState([]);
  const [stockFour, setStockFour] = useState([]);
  const [stockFive, setStockFive] = useState([]);
  const [stockSix, setStockSix] = useState([]);
  const [stockSeven, setStockSeven] = useState([]);
  const [stockEight, setStockEight] = useState([]);
  const [stockNine, setStockNine] = useState([]);
  const [stockTen, setStockTen] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const [loginError, setLoginError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);
  const [fullError, setFullError] = useState(false);

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
      "https://api.polygon.io/v1/summaries?ticker.any_of=MMM,AOS,ABT,ABBV,ATEN,ACN,ATVI,ADM,ADBE,AAP,AMD,AES,AFL,A,APD,AKAM,ALK,ALB,ARE,ALGN,ALLE,LNT,ALL,GOOGL,GOOG,MO,AMZN,AMCR,AEE,AAL,AEP,AXP,AIG,AMT,AWK,AMP,ABC,AME,AMGN,APH,ADI,ANSS,ELV,AON,APA,AAPL,AMAT,APTV,ANET,AJG&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStock(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=AIZ,T,ATO,ADSK,ADP,AZO,AVB,AVY,BKR,BALL,BAC,BBWI,BAX,BDX,BRK.B,BBY,BIO,TECH,BIIB,BLK,BK,BA,BKNG,BWA,BXP,BSX,BMY,AVGO,BR,BRO,BF.B,CHRW,CDNS,CZR,CPB,COF,CAH,KMX,CCL,CARR,CTLT,CAT,CBOE,CBRE,CDW,CE,CNC,CNP,CDAY,ORCL&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockTwo(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=CF,CRL,SCHW,CHTR,CVX,CMG,CB,CHD,CI,CINF,CTAS,CSCO,C,CFG,YUM,CLX,CME,CMS,KO,CTSH,CL,CMCSA,CMA,CAG,COP,ED,STZ,CPRT,GLW,CTVA,COST,CTRA,CCI,CSX,CMI,CVS,DHI,DHR,DRI,DVA,DE,DAL,XRAY,DVN,DXCM,FANG,DLR,DFS,DISA,WBD&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockThree(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=DISH,DG,DLTR,D,DPZ,DOV,DOW,DTE,DUK,ZBRA,DD,DXC,EMN,ETN,EBAY,ECL,EIX,EW,EA,LLY,EMR,ENPH,ETR,EOG,EFX,EQIX,EQR,ESS,EL,ETSY,RE,EVRG,ES,EXC,EXPE,EXPD,EXR,XOM,FFIV,META,FAST,FRT,FDX,FIS,FITB,FRC,FE,FISV,FLT,FMC&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockFour(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=F,FTNT,FTV,FBHS,FOXA,FOX,BEN,FCX,GPS,GRMN,IT,GNRC,GD,GE,GIS,GM,GPC,GILD,GPN,GL,GS,HAL,HBI,HAS,HCA,PEAK,HSIC,HES,HPE,HLT,HOLX,HD,HON,HRL,HST,HWM,HPQ,HUM,HBAN,HII,IBM,IEX,IDXX,ZBH,ITW,ILMN,INCY,IR,INTC,ICE&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockFive(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=FF,IP,IPG,INTU,ISRG,IVZ,IPGP,IQV,IRM,JBHT,JKHY,J,SJM,JNJ,JCI,JPM,JNPR,ZION,K,KEY,KEYS,KMB,KIM,KMI,KLAC,KHC,KR,LHX,LH,LRCX,LW,LVS,LEG,LDOS,LEN,LNC,LIN,LYV,LKQ,LMT,L,LOW,LUMN,LYB,MTB,MRO,MPC,MKTX,MAR,MMC&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockSix(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=MLM,MAS,MA,MTCH,MKC,MCD,MCK,MDT,MRK,MET,MTD,MGM,MCHP,MU,MSFT,MAA,MRNA,MHK,TAP,MDLZ,MPWR,MNST,MCO,MS,MSI,MSCI,NDAQ,NTAP,NFLX,NWL,NEM,NWSA,NWS,NEE,ZTS,NKE,NI,NSC,NTRS,NOC,GEN,NCLH,NRG,NUE,NVDA,NVR,NXPI,ORLY,OXY,ODFL&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockSeven(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=OMC,OKE,ORCL,OGN,OTIS,PCAR,PKG,PH,PAYX,PAYC,PYPL,PENN,PNR,MTB,PEP,PKI,PFE,PM,PSX,PNW,PXD,PNC,POOL,PPG,PPL,PFG,PG,PGR,PLD,PRU,PTC,PEG,PSA,PHM,PVH,QRVO,QCOM,PWR,DGX,RL,RJF,RTX,O,REG,REGN,RF,RSG,RMD,RHI,ROK&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockEight(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=ROL,ROP,ROST,RCL,SPGI,CRM,SBAC,SLB,STX,SEE,SRE,NOW,SHW,SPG,SWKS,SNA,SO,LUV,SWK,SBUX,STT,STE,SYK,SIVB,SYF,SNPS,SYY,TMUS,TROW,TTWO,TPR,TGT,TEL,TDY,TFX,TER,TSLA,TXN,TXT,COO,HIG,HSY,MOS,TRV,DIS,TMO,TJX,TSCO,TT,TDG&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockNine(data.results));
    fetch(
      "https://api.polygon.io/v1/summaries?ticker.any_of=TRMB,TFC,CSGP,TYL,TSN,USB,UDR,ULTA,UAA,UA,UNP,UAL,UPS,URI,UNH,UHS,VLO,VTR,VRSN,VRSK,VZ,VRTX,VFC,INVH,VTRS,V,VNO,VMC,WRB,GWW,WAB,WBA,WMT,WM,WAT,WEC,WFC,WELL,WST,WDC,WU,WRK,WY,WHR,WMB,GME,WYNN,XEL,APEI,XYL&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj",
      {
        method: "GET",
        headers: {
          "X-Polygon-Edge-ID": "sample_edge_id",
          "X-Polygon-Edge-IP-Address": "8.8.8.8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setStockTen(data.results));
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, async (loggedInUser) => {
      if (loggedInUser) {
        setLoggedIn(true);
        setUser(loggedInUser);
        if (user.uid) {
          const watchlistRef = doc(db, "watchlist", user.uid);

          getDoc(watchlistRef).then((e) => {
            if (e.data()) {
              currentWatchlist = e.data().symbols;
            }
          });
        }
      } else {
        console.log("Logged out");
      }
    });
  }, [user]);

  const allStocks = [
    ...stock,
    ...stockTwo,
    ...stockThree,
    ...stockFour,
    ...stockFive,
    ...stockSix,
    ...stockSeven,
    ...stockEight,
    ...stockNine,
    ...stockTen,
  ];

  if (allStocks.length < 500) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <h1 style={{ color: "#292032" }}>Fetching the latest market data</h1>
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
                  backgroundColor: "#292032",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
              >
                Company
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#292032",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                }}
              >
                Ticker
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "#292032",
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
                  backgroundColor: "#292032",
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
                  backgroundColor: "#292032",
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
                  backgroundColor: "#292032",
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
                  backgroundColor: "#292032",
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
          <TableBody className="tablebody">
            {allStocks
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
                        href={`/stocks/${data.ticker}`}
                        style={{ textDecoration: "none", color: "#292032" }}
                      >
                        {data.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/stocks/${data.ticker}`}
                        style={{ textDecoration: "none", color: "#292032" }}
                      >
                        {data.ticker}
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
                      ${data.price.toFixed(2)}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      ${data.session.previous_close.toFixed(2)}
                    </TableCell>
                    <TableCell style={change()} align="right">
                      ${data.session.change.toFixed(2)}
                    </TableCell>
                    <TableCell style={change()} align="right">
                      ({data.session.change_percent.toFixed(2)}%)
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        component="button"
                        variant="outlined"
                        sx={{ color: "#53588c", borderColor: "#53588c" }}
                        onClick={() => {
                          if (!loggedIn) {
                            // alert("Must be logged in to add to watchlist");
                            setLoginError(true);
                            return;
                          }
                          if (currentWatchlist.includes(data.ticker)) {
                            // alert(`Watchlist already contains ${data.name}`);
                            setDuplicateError(true);
                            return;
                          }
                          if (currentWatchlist.length > 9) {
                            // alert("Watchlist is full");
                            setFullError(true);
                            return;
                          } else {
                            if (typeof window !== "undefined") {
                              const watchlistRef = doc(
                                db,
                                "watchlist",
                                user.uid
                              );

                              currentWatchlist.push(data.ticker);
                              const date = new Date();
                              let obj = {};
                              obj[data.ticker] = date.getTime();
                              timestampers.push(obj);
                              setDoc(watchlistRef, {
                                symbols: currentWatchlist,
                                timestamp: timestampers,
                              })
                                .then(() => {
                                  console.log(
                                    "Document has been added successfully"
                                  );
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
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
          count={500}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[10, 25]}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ maxWidth: 1700 }}
        />
      </TableContainer>
      <Snackbar
        open={loginError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={() => setLoginError(false)}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>Must be logged in to add to watchlist
        </Alert>
      </Snackbar>
      <Snackbar
        open={duplicateError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={() => setDuplicateError(false)}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle> Watchlist cannot have duplicates
        </Alert>
      </Snackbar>
      <Snackbar
        open={fullError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={() => setFullError(false)}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle> Watchlist is full
        </Alert>
      </Snackbar>
    </Box>
  );
}
