"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css';
import { Box, Button, styled, Typography } from '@mui/material';
import "../public/home.css"
import { textAlign } from '@mui/system';

// DONT LOOK AT THIS DONT LOOK AT THIS PLEASE DONT LOOK AT THIS!!!!
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
    });
  }

  // document.getElementById('video').playbackRate = 0.75;

  return (
    <main>
      <div className="lol">
        <section className="hero">
          <div className="headerbox">
            <p id="abovetext"><strong>The Future of Prediction is Here. It's Polygon.io.</strong></p>
            <p id="text"> Duckhunt </p>
            <p id="belowtext"> Build your finances with our commission-free proprietary prediction and analysis tool. I'm trying to push
              the video down so it's not behind the words, but as you can see, I haven't done it yet.</p>
          </div>
          <video autoPlay="autoplay" loop={true} muted id="video">
            <source src="herocover9.mp4" type="video/mp4"></source>
          </video>
        </section>
        <section>
          <div class="ticker-title">
            <span>S&P 500</span>
            <span>Dow</span>
            <span>Nasdaq</span>
            <span>VIX</span>
            <span>Amazon</span>
            <span>Facebook</span>
            <span>Emerson</span>
            <span>Chase</span>
            <span>Hellos</span>
            <span>Spaghetti</span>
            <span>Poop</span>
            <span>Poopie</span>
            <span>Wah</span>
          </div>
        </section>
        <section className="sec">
          <h2 id> This person is very cool: </h2>
          <div className="scroller"><h2>
            <span>
              Michelle<br />
              Alex<br />
              Stevfen<br />
              Ben
            </span>
          </h2>

          </div>
          <p id>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error <br></br> sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            But I must expl<br></br>ain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure <br></br>
            that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
        </section>
        <section className="boxman">
          <div> hey whats up </div>
          <div> hey whats up </div>
          <div> hey whats up </div>
        </section>
      </div>


    </main>
  )
}
