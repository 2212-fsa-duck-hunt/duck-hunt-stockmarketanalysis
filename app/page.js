"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css';
import { Box, Button, styled, Typography } from '@mui/material';
import "../public/home.css"
import { textAlign } from '@mui/system';
import { useRouter } from "next/navigation";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  // if (typeof window !== 'undefined') {
  //   window.addEventListener("scroll", () => {
  //     let div1 = document.getElementById('div1');
  //     let div2 = document.getElementById('div2');
  //     let div3 = document.getElementById('div3');
  //     let value = window.scrollY;
  //     div1.style.top = -value * .5 + 'px';
  //     div2.style.top = -value * .75 + 'px';
  //     div3.style.top = -value * 1 + 'px'
  //   });
  // };

  const router = useRouter();

  return (
    <main>
      <div className="lol">
        <section className="hero">
          <video className="videodiv" autoPlay="autoplay" loop={true} muted id="video">
            <source src="herocover9.mp4" type="video/mp4"></source>
          </video>
          <div className="headerbox">
            <p id="text"> Duckhunt </p>
            <p id="belowtext"> Build your finances with our commission-free information hub and visualization and analysis tools.</p>
          </div>
        </section>

        <div className="container">
          <div className="marquee-wrapper">
            <div className="marquee">
              <div className="marquee-group"> <Link href='/stocks/amazon' className="marquee-tag-wrapper">
                <div className="marquee-tag-container"> <span className="marquee-tag">Amazon</span> </div>
              </Link> <Link href='/stocks/msft' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">MSFT</span> </div>
                </Link> <Link href='/stocks/meta' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">META</span> </div>
                </Link> <Link href='/stocks/aapl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">AAPL</span> </div>
                </Link> <Link href='/stocks/tsla' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">TSLA</span> </div>
                </Link> <Link href='/stocks/googl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">GOOGL</span> </div>
                </Link> <Link href='/stocks/nvda' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">NVDA</span> </div>
                </Link> <Link href='/stocks/unh' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">UNH</span> </div>
                </Link> <Link href='/stocks/NFLX' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">NFLX</span> </div>
                </Link> <Link href='/stocks/nke' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">NKE</span> </div>
                </Link> <Link href='/stocks/jnj' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">JNJ</span> </div>
                </Link>
                <Link href='/stocks/pypl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">PYPL</span> </div>
                </Link>
                <Link href='/stocks/jpm' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">JPM</span> </div>
                </Link>
                <Link href='/stocks/v' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">V</span> </div>
                </Link>
              </div>
              <div aria-hidden="true" className="marquee-group"> <Link href='/stocks/amazon' className="marquee-tag-wrapper">
                <div className="marquee-tag-container"> <span className="marquee-tag">Amazon</span> </div>
              </Link> <Link href='/stocks/msft' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">MSFT</span> </div>
                </Link> <Link href='/stocks/meta' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">META</span> </div>
                </Link> <Link href='/stocks/aapl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">AAPL</span> </div>
                </Link> <Link href='/stocks/tsla' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">TSLA</span> </div>
                </Link> <Link href='/stocks/googl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">GOOGL</span> </div>
                </Link> <Link href='/stocks/nvda' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">NVDA</span> </div>
                </Link> <Link href='/stocks/unh' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">UNH</span> </div>
                </Link> <Link href='/stocks/roku' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">NFLX</span> </div>
                </Link> <Link href='/stocks/NFLX' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">NKE</span> </div>
                </Link> <Link href='/stocks/jnj' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">JNJ</span> </div>
                </Link>
                <Link href='/stocks/pypl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">PYPL</span> </div>
                </Link>
                <Link href='/stocks/jpm' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">JPM</span> </div>
                </Link>
                <Link href='/stocks/v' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">V</span> </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="sec">
          {/* <h2 id> This person is very cool: </h2>
          <div className="scroller"><h2>
            <span>
              Michelle<br />
              Alex<br />
              Stevfen<br />
              Ben
            </span>
          </h2>

          </div> */}
          <section className="borderbox">
            <div className="boxheader" >
              <div id="boxheaderheader">
                A robust financial platform available to
              </div>
              <div className="scroller">
                <span>
                  investors <br />
                  advisors <br />
                  students <br />
                  <div className="ducks" style={{ color: "#686EAF" }}> even ducks <br /> </div>
                </span>
              </div>
            </div>
            <section className="boxman">
              <div id="div1">
                <img src="news2.png" />
                <h4> Comprehensive News</h4>
                <span> Stay up to date with the latest, breaking news on the market. We bring financial and crypto news that is updated daily and organized according to diverse sectors. </span>
              </div>
              <div id="div2">
                <img src="list1.png" />
                <h4> Watchlist Functionality </h4>
                <span> Keep track of your favorite stocks with the watchlist function. Select up to 10 stocks to keep a closer eye on and decide when to buy/sell. </span>
              </div>
              <div id="div3">
                <img src="candlestickchart.png" />

                <h4> Data Made Easy </h4>
                <span> Navigate through data visualization to make accurate predictions on your investments. Duckhunt provides the accessibility to find all the information in one place. </span>
              </div>
            </section>
          </section>
        </section>
      </div>
    </main>
  )
}
