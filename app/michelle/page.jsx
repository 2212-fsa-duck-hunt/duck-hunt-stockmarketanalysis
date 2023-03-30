
"use client"
import { useEffect, useState } from "react";
import protobuf from "protobufjs";
import { Buffer } from "buffer";
import "../../public/stocks.css";

//we dont have access to buffer in our environment, so a polyfill will give us buffer that we can use. it's like using fetch in node.
export default function Michelle(props) {

    const symbol = props.symbol;
    const open = props.open;
    // function formatPrice(price) {
    //     return `$${price.toFixed(2)}`
    // }

    //   THIS IS FOR THE TICKER
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



    // if (stock.price === null) {
    //     return (
    //         <div> Loading definitely need a better page for this </div>
    //     )
    // } else return (
    //     <div className="chart">
    //         <div className="stock">
    //             GME: {stock.price}
    //             {emojis[direction]}
    //         </div>
    //     </div>)

    if (stock.price === null) {
        return 'Loading'
    } else return (
        <div>
            {stock.price}
        </div>

    )

} 