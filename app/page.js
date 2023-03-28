"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css';
import { Box, Button, styled, Typography } from '@mui/material';
import "../public/home.css"
import { textAlign } from '@mui/system';
import { useRouter } from "next/navigation"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
    });
  };

  const router = useRouter();

  // document.getElementById('video').playbackRate = 0.75;

  return (
    <main>
      <div className="lol">
        <section className="hero">
          <video className="videodiv" autoPlay="autoplay" loop={true} muted id="video">
            <source src="herocover9.mp4" type="video/mp4"></source>
          </video>
          <div className="headerbox">
            {/* <p id="abovetext"><strong>The Future of Prediction is Here. It's Polygon.io.</strong></p> */}
            <p id="text"> Duckhunt </p>
            <p id="belowtext"> Build your finances with our commission-free visualization and analysis tool.</p>
          </div>
        </section>


        {/* <section>
          <div className='ticker-div' >
            <span className="ticker1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S&P 500 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nasdaq &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VIX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amzn &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; meta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TSLA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AAPL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AMD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COIN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MSFT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NVDA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NKE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BABA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ROKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; XOM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CVX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UNH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WMT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TXN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CCL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PYPL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NFLX</span>
            <span className="ticker2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S&P 500 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nasdaq &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VIX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amzn &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; meta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TSLA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AAPL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AMD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COIN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MSFT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NVDA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NKE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BABA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ROKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; XOM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CVX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UNH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WMT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TXN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CCL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PYPL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INTC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NFLX</span>
          </div>
        </section> */}

        <div className="container">
          <div className="marquee-wrapper" style={{ background: "linear-gradient(#782089, #214090);" }}>
            <div className="marquee">
              <div className="marquee-group"> <a href='/stocks/amazon' className="marquee-tag-wrapper">
                <div className="marquee-tag-container"> <span className="marquee-tag">Amazon</span> </div>
              </a> <a href='/stocks/msft' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">MSFT</span> </div>
                </a> <a href='/stocks/meta' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">META</span> </div>
                </a> <a href='/stocks/aapl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">AAPL</span> </div>
                </a> <a href='/stocks/tsla' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">TSLA</span> </div>
                </a> <a href='/stocks/googl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">GOOGL</span> </div>
                </a> <a href='/stocks/nvda' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">NVDA</span> </div>
                </a> <a href='/stocks/unh' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">UNH</span> </div>
                </a> <a href='/stocks/NFLX' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">NFLX</span> </div>
                </a> <a href='/stocks/nke' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">NKE</span> </div>
                </a> <a href='/stocks/jnj' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">JNJ</span> </div>
                </a>
                <a href='/stocks/pypl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">PYPL</span> </div>
                </a>
                <a href='/stocks/jpm' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">JPM</span> </div>
                </a>
                <a href='/stocks/v' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">V</span> </div>
                </a>
              </div>
              <div aria-hidden="true" className="marquee-group"> <a href='/stocks/amazon' className="marquee-tag-wrapper">
                <div className="marquee-tag-container"> <span className="marquee-tag">Amazon</span> </div>
              </a> <a href='/stocks/msft' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">MSFT</span> </div>
                </a> <a href='/stocks/meta' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">META</span> </div>
                </a> <a href='/stocks/aapl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">AAPL</span> </div>
                </a> <a href='/stocks/tsla' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">TSLA</span> </div>
                </a> <a href='/stocks/googl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">GOOGL</span> </div>
                </a> <a href='/stocks/nvda' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">NVDA</span> </div>
                </a> <a href='/stocks/unh' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">UNH</span> </div>
                </a> <a href='/stocks/roku' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">NFLX</span> </div>
                </a> <a href='/stocks/NFLX' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"> <span className="marquee-tag">NKE</span> </div>
                </a> <a href='/stocks/jnj' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container">  <span className="marquee-tag">JNJ</span> </div>
                </a>
                <a href='/stocks/pypl' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">PYPL</span> </div>
                </a>
                <a href='/stocks/jpm' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">JPM</span> </div>
                </a>
                <a href='/stocks/v' className="marquee-tag-wrapper">
                  <div className="marquee-tag-container"><span className="marquee-tag">V</span> </div>
                </a>
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
          <section className="boxman">
            <div className="boxsection">
              <img src="https://cdn-icons-png.flaticon.com/512/2942/2942247.png" />
              <h4> Comprehensive Stock/Crypto News</h4>
              <span> Stay up to date with the latest, breaking news on the market.</span>
            </div>
            <div className="boxsection">
              <img src="https://cdn-icons-png.flaticon.com/512/1556/1556579.png" />
              <h4> Watchlist Functionality </h4>
              <span> Keep track of your favorite stocks with our watchlist function. </span>
            </div>
            <div className="boxsection">
              <img src="https://cdn-icons-png.flaticon.com/512/7038/7038131.png" />

              <h4> Data Made Easy </h4>
              <span> Navigate through data visualization to make accurate predictions on your investments. </span>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
