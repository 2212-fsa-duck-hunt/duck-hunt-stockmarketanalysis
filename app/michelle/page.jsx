"use client"
import { useEffect } from "react";
import protobuf from "protobufjs";
import { Buffer } from "buffer";

//we dont have access to buffer in our environment, so a polyfill will give us buffer that we can use. it's like using fetch in node.
export default function Michelle() {

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
                    subscribe: ['GME']
                }));
            };

            ws.onclose = function close() {
                console.log('disconnected');
            };
            ws.onmessage = function incoming(message) {
                console.log(Yaticker.decode(Buffer.from(message.data, 'base64')));
            };
        });
    }, []);

    return (<div>
        <h1> michelle page woohoo! </h1>
    </div>)
}