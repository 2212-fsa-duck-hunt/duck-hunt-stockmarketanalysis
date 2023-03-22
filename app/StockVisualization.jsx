import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const StockVisualization = () => {
  const symbol = 'AMZN';
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const apiKey = 'C3ZDVN2FU7EARZ2P';
    axios
    .get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`)
      .then((response) => {
        const data = response.data['Time Series (Daily)'];

        if (data) {
          const formattedData = Object.keys(data).map((date) => ({
            date,
            close: parseFloat(data[date]['4. close']),
          }));

          console.log('Fetched Data:', formattedData); // Log the fetched data for debugging
          setStockData(formattedData);
        } else {
          console.log('No data received:', response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const chartOptions = {
    chart: {
      type: 'line',
      height: '5%', 
      width: '5%',
    },
    title: {
      text: symbol,
    },
    xaxis: {
      categories: stockData.map((entry) => entry.date),
    },
  };

  const chartSeries = [
    {
      name: 'Closing Price',
      data: stockData.map((entry) => entry.close),
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="line" />
    </div>
  );
};

export default StockVisualization;