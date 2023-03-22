"use client";

import { useEffect, useState } from 'react';
import "../../../public/news.css"

const listOfStocks = require('../../listOfStocks.JSON');


export default function CommunicationServices() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const commList = listOfStocks.filter((element) => { return element.Sector === 'Communication Services' });
    const ilSymbols = commList.map(element => element.Symbol);

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
                    <h3 id> Communication Services </h3>
                    {data.map(stock =>
                        <div className='newsbox'>
                            <h4> {stock.results[0].title}</h4>
                            <img className="picture" src={stock.results[0].image_url} />
                            <div className="description"> {stock.results[0].description}</div>
                        </div>
                    )}
                </section>
            </div>
        )
    }
}