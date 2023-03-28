"use client";

import { useEffect } from "react";
import { useState } from "react";
import "../../public/news.css";
import NewsElement from "./NewsElement";

export default function News() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.marketaux.com/v1/news/all?api_token=HwI5202Keu1pQVePGqGXMunm5suTSsy1chdEVb17"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      });
  }, []);
  console.log("data is ====>:", data);

  if (!data) {
    return (
      <div>
        <section className="sec">
          <h3 id> News </h3>
          <p id>I'M NULL AND LOADING</p>
        </section>
      </div>
    );
  } else
    return (
      <div>
        <section className="sec">
          <h3 id> News </h3>
          <div>
            {data.map((singledata) => {
              return (
                <NewsElement
                  key={singledata.uuid}
                  data={singledata}
                ></NewsElement>
              );
            })}
          </div>
        </section>
      </div>
    );
}
