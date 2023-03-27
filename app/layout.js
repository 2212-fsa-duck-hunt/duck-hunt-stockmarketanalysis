// 'use client';
import './globals.css';
import Navbar from './navbar';
import AboveBar from './abovebar';
import "../public/home.css"

//this layout applies to EVERYTHING!!! you can add the navbar and stuff here haha

export const metadata = {
  title: 'Duck Hunt Stock Analysis',
  description: 'Analyze your stocks quackly quack quack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          {/* <AboveBar /> */}
          <Navbar />
        </nav>
          {children}
        <footer>
          <div> hey </div>
        </footer>
      </body>
    </html>
  );
}
