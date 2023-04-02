
"use client"
import { useEffect, useState } from "react";
import protobuf from "protobufjs";
import { Buffer } from "buffer";
import "../../public/stocks.css";

//we dont have access to buffer in our environment, so a polyfill will give us buffer that we can use. it's like using fetch in node.
export default function Michelle(props) {
    const symbol = props.symbol;
    const open = props.open;
    const timestampArray = props.timestamp;

    const selectedElementTimestamp = timestampArray.filter((element) => Object.keys(element)[0] === symbol);
    const addedTime = selectedElementTimestamp[0][symbol];

    const [timedPrice, setTimedPrice] = useState('');

    fetch(
        `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/minute/${addedTime}/${addedTime + 1}?adjusted=true&sort=asc&limit=1&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj`,
        {
            method: "GET",
            headers: {
                "X-Polygon-Edge-ID": "watchlist",
                "X-Polygon-Edge-IP-Address": "8.8.8.8",
            }
        }
    )
        .then((res) => res.json())
        .then((data) => {
            if (data.results) {
                setTimedPrice(data.results[0]['o'])
            }
        })
        .catch((err) => console.log("error", err))

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

    //timed price of ADBE 385.085
    //stock price: 385.37
    if (stock.price === null || !timedPrice) {
        return 'Loading'
    } else return (
        <div>
            {(((stock.price - timedPrice) / timedPrice) * 100).toFixed(2) + '%'}
        </div>

    )

} 