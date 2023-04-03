"use client"
import StockVisualization from '../../StockVisualization';
import StockChart from '../../StockChart';
import LinearModelVisualization from '../../LinearModelVisualization';
import { Buffer } from "buffer";
import protobuf from "protobufjs";
const listOfCrypto = require('../../listOfCrypto.JSON');
import { useState, useEffect } from 'react';
import "../../../public/stocks.css";
import LinearRegression from "../../LinearRegression"

const CryptoViz = ({ params }) => {
    const cryptoSymbols = Object.keys(listOfCrypto);
    const listOfNames = Object.values(listOfCrypto).map((element) => { return element.split(' ').join('').toLowerCase() });
    let symbol = '';
    if (cryptoSymbols.includes(params.id.toUpperCase())) {
        symbol = params.id.toUpperCase();
    } else if (listOfNames.includes(params.id.toLowerCase())) {
        let value = params.id.toLowerCase();
        let index = listOfNames.indexOf(value);
        symbol = cryptoSymbols[index];
    } else {
        console.log('symbol/name not found')
    }

    const [stock, setStock] = useState("Loading")
    const [direction, setDirection] = useState('');
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

    if (stock === null || stock.price === null) {
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
            <div className="singlestockpage">
                <div className="stock">
                    {symbol} {stock.price}
                    {emojis[direction]}
                </div>

                <section class="container">
                    <div class="slider-wrapper">
                        <div class="slider">
                            <section id="candlestick">
                                <div id="cs">
                                    <StockChart symbol={`X:${symbol}USD`} style={{ height: '100%', width: '100%', margin: '0 auto', fontFamily: 'Poppins' }} />
                                </div>
                            </section>
                            <section id="linearmodelvisualization">
                                <div id="lm">
                                    <LinearModelVisualization style={{ height: '100%', width: '100%', margin: '0 auto' }} />
                                </div>
                            </section>
                            <section id="linearregression">
                                <div id="lr">
                                    <LinearRegression symbol={`X:${symbol}USD`} style={{ height: '100%', width: '100%', margin: '0 auto' }} />
                                </div>
                            </section>

                        </div>
                        <div class="slider-nav">
                            <a href="#candlestick"></a>
                            <a href="#linearmodelvisualization"></a>
                            <a href="#linearregression"></a>
                        </div>
                    </div>
                </section>
            </ div>
        );
    }
};

export default CryptoViz;

