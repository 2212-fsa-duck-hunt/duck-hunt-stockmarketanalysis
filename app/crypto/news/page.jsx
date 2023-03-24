"use client";

import { useEffect, useState } from 'react';
import "../../../public/news.css";
import Link from 'next/link';

const listOfCrypto = require('../../listOfTopCrypto.JSON');


export default function Crypto() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const cryptoSymbols = listOfCrypto.map(element => element.Symbol);

    useEffect(() => {
        setIsLoading(true);
        const promises = cryptoSymbols.map(symbol =>
            fetch(`https://api.polygon.io/v2/reference/news?ticker=${symbol}&limit=1&apiKey=p3DDXEob7V6iRw5653VW9k_bEkGXG6hj`, {
                method: "GET",
                headers: {
                    "X-Polygon-Edge-ID": "sample_edge_id",
                    "X-Polygon-Edge-IP-Address": "8.8.8.8",
                },
            })
                .then(res => res.json())
        );
        Promise.all(promises)
            .then(data => setData(data));
        setIsLoading(false);
    }, []);

    if (!data) {
        return <div> im loading .__.</div>
    } else {
        return (
            <div>
                <section className="sec">
                    <h3 id> Crypto News </h3>
                    {data.map(crypto => {
                        if (crypto.results.length > 0) {
                            return (
                                <div className='newsbox'>
                                    <h4><Link href={crypto.results[0].article_url}>{crypto.results[0].title}</Link>
                                    </h4>
                                    <img className="picture" src={crypto.results[0].image_url} />
                                    <div className="description"> {crypto.results[0].description}</div>
                                </div>
                            )
                        }
                    }
                    )}
                </section>
            </div>
        )
    }
}