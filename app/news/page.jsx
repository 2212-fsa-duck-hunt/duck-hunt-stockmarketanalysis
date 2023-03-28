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

  if (!data) {
    return (
      <div>
        <section className="sec1">
          <h3> News </h3>
        </section>
      </div>
    );
  } else
    return (
      <div>
        <section className="sec">
          <h3> News </h3>
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
