"use client";

import { useEffect, useState } from 'react';
import "../../../public/news.css";
import Link from 'next/link';

const listOfStocks = require('../../listOfStocks.JSON');


export default function Financials() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const financialsList = listOfStocks.filter((element) => { return element.Sector === 'Financials' });
    const ilSymbols = financialsList.map(element => element.Symbol);

    useEffect(() => {
        setIsLoading(true);
        const promises = ilSymbols.map(symbol =>
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
                    <h3 id> Financials </h3>
                    {data.map(stock =>
                        <div className='newsbox'>
                            <h4><Link href={stock.results[0].article_url}>{stock.results[0].title}</Link>
                            </h4>
                            <img className="picture" src={stock.results[0].image_url} />
                            <div className="description"> {stock.results[0].description}</div>
                        </div>
                    )}
                </section>
            </div>
        )
    }
}