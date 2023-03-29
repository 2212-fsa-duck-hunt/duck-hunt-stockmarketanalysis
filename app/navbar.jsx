"use client";
import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import "../public/home.css";
import Router, { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const pages = ["Stocks", "Crypto", "News", "About Polygon.io"];
const settings = ["Profile", "Account", "Watchlist", "Logout"];

function Navbar() {
  const [anchorNav, setAnchorNav] = React.useState(null);
  const [anchorUser, setAnchorUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorNav(null);
  };

  const handleCloseNavMenuStocks = () => {
    setAnchorNav(null);
    router.push("/stocks");
  };
  const handleCloseNavMenuCrypto = () => {
    setAnchorNav(null);
    router.push("/crypto");
  };
  const handleCloseNavMenuNews = () => {
    setAnchorNav(null);
    router.push("/news");
  };
  const handleCloseNavMenuAbout = () => {
    setAnchorNav(null);
  };

  const handleCloseWatchlist = () => {
    setAnchorUser(null);
    router.push("/watchlist");
  };

  const handleCloseLogin = () => {
    setAnchorUser(null);
    router.push("/login");
  };

  const handleCloseLogout = () => {
    setAnchorUser(null);
    userSignOut();
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedIn(false);
        setUser({});
        console.log("signedout");
        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      router.push(`/stocks/${event.target.value}`);
      event.target.value = "";
    }
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  useEffect(() => {
    onAuthStateChanged(auth, async (loggedInUser) => {
      if (loggedInUser) {
        //do your logged in user crap here
        console.log("Logged in ", loggedInUser);
        setLoggedIn(true);
        setUser(loggedInUser);
      } else {
        console.log("Logged out");
      }
    });
  }, [user]);

  return (
    <AppBar position="static" style={{ background: "#11071B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Duckhunt
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              fontFamily="arial"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "arial",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenuStocks}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Poppins",
                fontWeight: 100,
              }}
            >
              Stocks
            </Button>
            <div className="dropdown">
              <Button
                onClick={handleCloseNavMenuCrypto}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Poppins",
                  fontWeight: 100,
                }}
              >
                Crypto
              </Button>
              <div className="dropdown-content">
                <Link href="/crypto/news">News</Link>
                <Link href="/crypto">Stocks</Link>
              </div>
            </div>

            <div className="dropdown">
              <Button
                onClick={handleCloseNavMenuNews}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Poppins",
                  fontWeight: 100,
                }}
              >
                {" "}
                News
              </Button>
              <div className="dropdown-content">
                <Link href="/news">General</Link>
                <Link href="/news/communicationservices">
                  Communication Services
                </Link>
                <Link href="/news/consumerdiscretionary">
                  Consumer Discretionary
                </Link>
                <Link href="/news/consumerstaples">ConsumerStaples</Link>
                <Link href="/news/financials">Financials</Link>
                <Link href="/news/healthcare">Healthcare</Link>
                <Link href="/news/industrials">Industrials</Link>
                <Link href="/news/informationtechnology">
                  Information Technology
                </Link>
                <Link href="/news/materials">Materials</Link>
                <Link href="/news/realestate">Real Estate</Link>
                <Link href="/news/utilities">Utilities</Link>
              </div>
            </div>

            <Button
              onClick={handleCloseNavMenuAbout}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Poppins",
                fontWeight: 100,
              }}
            >
              About
            </Button>
          </Box>
          <Search sx={{ margin: 4 }} onKeyDown={handleEnter}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" fontFamily="Poppins" />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorUser)}
              onClose={handleCloseUserMenu}
            >
              {loggedIn ? (
                <>
                  <MenuItem onClick={handleCloseWatchlist}>
                    <Typography
                      textAlign="center"
                      fontFamily="Poppins"
                      fontWeight="100"
                    >
                      Watchlist
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLogout}>
                    <Typography
                      textAlign="center"
                      fontFamily="Poppins"
                      fontWeight="100"
                    >
                      Log out
                    </Typography>
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleCloseLogin}>
                  <Typography
                    textAlign="center"
                    fontFamily="Poppins"
                    fontWeight="100"
                  >
                    Log in
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
