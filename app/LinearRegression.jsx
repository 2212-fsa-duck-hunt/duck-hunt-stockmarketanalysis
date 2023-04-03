import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const LinearRegression = (props) => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const symbol = props.symbol;

  useEffect(() => {
    // Load the data
    async function fetchStockData(stocksTicker) {
      const multiplier = 1;
      const adjusted = true;
      const sort = 'asc';
      const limit = 360;

      const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/day/2022-04-04/2023-04-04`, {
        params: {
          adjusted,
          sort,
          limit,
          apiKey: "p3DDXEob7V6iRw5653VW9k_bEkGXG6hj"
        },
        headers: {
          "X-Polygon-Edge-ID": "ML_model",
          "X-Polygon-Edge-IP-Address": "192.0.2.1",
          "X-Polygon-Edge-User-Agent": "my_ML"
        }
      });

      return response.data;
    }

    async function fetchData() {
      // Set your stock ticker symbol and timespan here
      const stocksTicker = symbol;

      // Fetch the data using the provided API
      const apiData = await fetchStockData(stocksTicker);

      setData(apiData.results);
    }


    fetchData();
  }, []);

  useEffect(() => {
    async function trainModel() {
      if (data.length > 0) {
        const xs = data.map((item) => item.t); // Use Unix timestamp for date
        const ys = data.map((item) => item.c); // Use closing price

        const xsMean = xs.reduce((acc, val) => acc + val, 0) / xs.length;
        const ysMean = ys.reduce((acc, val) => acc + val, 0) / ys.length;

        let numerator = 0;
        let denominator = 0;

        for (let i = 0; i < xs.length; i++) {
          numerator += (xs[i] - xsMean) * (ys[i] - ysMean);
          denominator += (xs[i] - xsMean) ** 2;
        }

        const slope = numerator / denominator;
        const intercept = ysMean - slope * xsMean;

        const chartData = xs.map((x) => ({
          x,
          y: slope * x + intercept,
        }));

        setChartData(chartData);
      }
    }

    trainModel();
  }, [data]);

  return (
    <div>
      {chartData.length > 0 && (
        <Plot
          data={[
            {
              x: data.map((point) => new Date(point.t)),
              y: data.map((point) => point.c),
              mode: 'markers',
              type: 'scatter',
              name: 'Actual',
              marker: {
                color: 'blue',
                symbol: 'circle',
                size: 6,
              },
            },
            {
              x: chartData.map((point) => new Date(point.x)),
              y: chartData.map((point) => point.y),
              mode: 'lines',
              type: 'scatter',
              name: 'Prediction',
              line: {
                color: 'red',
                width: 2,
              },
            },
          ]}
          layout={{
            title: {
              text: 'Linear Regression Model',
              font: {
                family: 'Poppins',
                size: 24,
                color: 'black',
              },
            },
            xaxis: {
              title: {
                text: 'Date',
                font: {
                  family: 'Poppins',
                  size: 18,
                  color: 'black',
                },
              },
            },
            yaxis: {
              title: {
                text: 'Closing Price',
                font: {
                  family: 'Poppins',
                  size: 18,
                  color: 'black',
                },
              },
            },
            legend: {
              font: {
                family: 'Poppins',
                size: 16,
                color: 'black',
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default LinearRegression;