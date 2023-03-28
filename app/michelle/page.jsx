// "use client"
// import { useEffect, useState } from "react";
// import protobuf from "protobufjs";
// import { Buffer } from "buffer";
// import "../../public/stocks.css";
// import Chart from 'react-apexcharts'

// //we dont have access to buffer in our environment, so a polyfill will give us buffer that we can use. it's like using fetch in node.
// export default function Michelle(props) {

//     const symbol = props.symbol;
//     function formatPrice(price) {
//         return `$${price.toFixed(2)}`
//     }

//     //   THIS IS FOR THE TICKER
//     const [stock, setStock] = useState("Loading")
//     const [direction, setDirection] = useState('');
//     const [data, setData] = useState(null);
//     const emojis = {
//         '': '',
//         'up': '⬆️',
//         'down': '⬇️'
//     }
//     useEffect(() => {
//         const ws = new WebSocket('wss://streamer.finance.yahoo.com');
//         const root = protobuf.load('./YPricingData.proto', (error, root) => {
//             if (error) {
//                 return console.log(error)
//             }
//             const Yaticker = root.lookupType("yaticker");

//             ws.onopen = function open() {
//                 console.log('connected');
//                 ws.send(JSON.stringify({
//                     subscribe: ['GME']
//                 }));
//             };

//             ws.onclose = function close() {
//                 console.log('disconnected');
//             };
//             ws.onmessage = function incoming(message) {
//                 const next = (Yaticker.decode(Buffer.from(message.data, 'base64')));
//                 if (stock) {
//                     const nextDirection = stock.price < next.price ? 'up' : stock.price > next.price ? 'down' : '';
//                     setDirection(nextDirection)
//                 }
//                 setStock(next);
//             };
//         });
//     }, []);

// //THIS IS FOR THE GRAPH
// const [series, setSeries] = useState([{
//     data: []
// }]);

// useEffect(() => {
//     fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/10/minute/2023-03-27/2023-03-27?adjusted=true&sort=asc&limit=120&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj
//     `, {
//         method: "GET",
//         headers: {
//             "X-Polygon-Edge-ID": "sample_edge_id",
//             "X-Polygon-Edge-IP-Address": "8.8.8.8",
//         },
//     })
//         .then(res => res.json())
//         .then(data => setData(data.results));
//     if (data === null) {
//         console.log("loading")
//     } else {
//         let prices = data.map((timestamp) =>
//         (
//             {
//                 x: new Date(timestamp.t),
//                 y: [timestamp.o, timestamp.h, timestamp.l, timestamp.c]
//             }
//         ))
//         setSeries(
//             [{
//                 data: prices
//             }]
//         )
//         console.log("what are the series", series)
//     }
// }, [data])

// const chart = {
//     options: {
//         chart: {
//             type: 'candlestick',
//             height: 350
//         },
//         title: {
//             text: 'Stock Chart',
//             align: 'left'
//         },
//         xaxis: {
//             type: 'datetime'
//         },
//         yaxis: {
//             tooltip: {
//                 enabled: true
//             }
//         }
//     },

//     //this is open high low close
//     series: [{
//         data: [{
//             x: new Date(1538778600000),
//             y: [6629.81, 6650.5, 6623.04, 6633.33]
//         },
//         {
//             x: new Date(1538780400000),
//             y: [6632.01, 6643.59, 6620, 6630.11]
//         }
//         ]
//     }],

// };

// if (stock === null) {
//     return (
//         <div> Loading definitely need a better page for this </div>
//     )
// } else return (
//     <div className="chart">
//         <div className="stock">
//             AAPL: {stock.price}
//             {emojis[direction]}
//         </div>
//         <div id="candlestick">
//             {/* <Chart options={chart.options} series={series} type="candlestick" width="50%" height="50%" /> */}
//         </div>
//     </div>)
// } 