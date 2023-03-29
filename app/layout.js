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
        <nav >
          {/* <AboveBar /> */}
          <Navbar />
        </nav>
        {children}
        <footer>
          <div style={{
            color: "white", background: '#11071b', justifyContent: 'center', alignText: 'center', bottom: '0', position: 'fixed', borderTopRightRadius: '26px'
          }}>
            <div style={{ fontSize: '0.75rem', padding: '7px' }}>
              Powered By Polygon.io
            </div>
          </div>
        </footer>
      </body >
    </html >
  );
}
