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


  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    let text = document.getElementById('text');
    // let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');


    let hill2 = document.getElementById('hill2');
    // let line = document.getElementById('line');
    // line.style.top = value * -1.5 + 'px';
    // hill2.style.top = value * 1 + 'px'


    text.style.marginTop = value * 2.5 + 'px';
    // leaf.style.marginTop = value * -1.5 + 'px';
    // leaf.style.left = value * 1.5 + 'px';

    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    // let candle = document.getElementById('candle');
    // candle.style.left = value * -1.5 + 'px';
  })


  return (
    <main>
      <div className="lol">
        <section className="parallax">
          <img src="hill1.png" id="hill1"></img>
          {/* <img src="hill2.png" id="hill2"></img> */}
          <img src="hill3.png" id="hill3"></img>
          <img src="hill4.png" id="hill4"></img>
          <img src="hill5.png" id="hill5"></img>
          <img src="tree.png" id="tree"></img>
          {/* <img src="leaf.png" id="leaf"></img> */}
          <img src="plant.png" id="plant"></img>
          {/* <img src="line.png" id="line"></img> */}
          {/* <img src="candle.png" id="candle"></img> */}
          <h2 id="text"> Duck Hunt </h2>
        </section>

        <section className="sec">
          <h2 id> This will be updated soon</h2>
          <p id> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Sed ut perspiciatis unde omnis iste natus error <br></br> sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            "But I must expl<br></br>ain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure <br></br>
            that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          </p>
        </section>
      </div>


    </main>
  )
}
