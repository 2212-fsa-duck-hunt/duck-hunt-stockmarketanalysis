"use client"
import StockVisualization from '../../StockVisualization';
import StockChart from '../../StockChart';
import LinearModelVisualization from '../../LinearModelVisualization';
import { Buffer } from "buffer";
import protobuf from "protobufjs";
const listOfStocks = require('../../listOfStocks.JSON');
import { useState, useEffect } from 'react';
import "../../../public/stocks.css"

const AppViz = ({ params }) => {
  //graphs info
  const listOfSymbols = listOfStocks.map((element) => element.Symbol);
  const listOfNames = listOfStocks.map((element) => { return element.Name.split(' ').join('').toLowerCase() });
  let symbol = '';
  if (listOfSymbols.includes(params.id.toUpperCase())) {
    symbol = params.id.toUpperCase();
  } else if (listOfNames.includes(params.id.toLowerCase())) {
    //amazon
    let value = params.id.toLowerCase();
    let index = listOfNames.indexOf(value);
    symbol = listOfSymbols[index];
  } else {
    console.log('symbol/name not found')
  }

  //ticker info
  const [stock, setStock] = useState("Loading")
  const [direction, setDirection] = useState('');
  // const [data, setData] = useState(null);
  const emojis = {
    '': '',
    'up': '⬆️',
    'down': '⬇️'
  }

  useEffect(() => {
    const ws = new WebSocket('wss://streamer.finance.yahoo.com');
    const root = protobuf.load('./YPricingData.proto', (error, root) => {
      if (error) {
        return console.log(error)
      }
      const Yaticker = root.lookupType("yaticker");
      ws.onopen = function open() {
        console.log('connected');
        ws.send(JSON.stringify({
          subscribe: [symbol]
        }));
      };

      ws.onclose = function close() {
        console.log('disconnected');
      };
      ws.onmessage = function incoming(message) {
        const next = (Yaticker.decode(Buffer.from(message.data, 'base64')));
        if (stock) {
          const nextDirection = stock.price < next.price ? 'up' : stock.price > next.price ? 'down' : '';
          setDirection(nextDirection)
        }
        setStock(next);
      };
    });
  }, []);

  if (stock === null) {
    return (
      <div className="chart">
        <div className="stock">
        </div>
        <div id="candlestick">
          <StockChart symbol={symbol} />
          <LinearModelVisualization />
        </div>
      </div>
    )
  } else {
    return (
      <div className="chart">
        <div className="stock">
          {symbol} {stock.price}
          {emojis[direction]}
        </div>
        <div id="candlestick" style={{ width: '70%', margin: '0 auto' }}>
          <StockChart symbol={symbol} />
          <LinearModelVisualization />
        </div>
      </div>
      // <div style={{ width: '70%', margin: '0 auto' }}>
      //   <StockVisualization /> 
      //   <StockChart symbol={symbol} />
      //   <LinearModelVisualization />
      // </div>
    );
  }
};

export default AppViz;


// "use client"
// import StockVisualization from '../../StockVisualization';
// import StockChart from '../../StockChart';
// import LinearModelVisualization from '../../LinearModelVisualization';
// import { Buffer } from "buffer";
// import protobuf from "protobufjs";
// const listOfStocks = require('../../listOfStocks.JSON');
// import { useState, useEffect } from 'react';
// // import "../../../public/stocks.css";
// import Michelle from '@/app/michelle/page';

// const AppViz = ({ params }) => {
//   //graphs info
//   const listOfSymbols = listOfStocks.map((element) => element.Symbol);
//   const listOfNames = listOfStocks.map((element) => { return element.Name.split(' ').join('').toLowerCase() });
//   let symbol = '';
//   if (listOfSymbols.includes(params.id.toUpperCase())) {
//     symbol = params.id.toUpperCase();
//   } else if (listOfNames.includes(params.id.toLowerCase())) {
//     //amazon
//     let value = params.id.toLowerCase();
//     let index = listOfNames.indexOf(value);
//     symbol = listOfSymbols[index];
//   } else {s
//     console.log('symbol/name not found')
//   }

//   console.log('symbol is:', symbol)

//   return (
//     <div>
//       <Michelle symbol={symbol} />
//       <div id="candlestick" style={{ width: '70%', margin: '0 auto' }}>
//         <StockChart symbol={symbol} />
//         <LinearModelVisualization />
//       </div>
//     </div>
//     // <div style={{ width: '70%', margin: '0 auto' }}>
//     //    <StockVisualization /> 
//     //   <StockChart symbol={symbol} />
//     //   <LinearModelVisualization />
//     // </div>
//   );
// };

// export default AppViz;