import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function StockIdPage() {
  const router = useRouter();
  const { id } = router.query;
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    if (id) {
      fetchStockData(id);
    }
  }, [id]);

  const fetchStockData = async (symbol) => {
    try {
      const response = await axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: 'TIME_SERIES_DAILY',
          symbol: symbol,
          apikey: 'YOUR_API_KEY'
        }
      });

      const timeSeries = response.data['Time Series (Daily)'];
      const formattedData = Object.keys(timeSeries).map(date => ({
        date,
        close: parseFloat(timeSeries[date]['4. close'])
      }));

      setStockData(formattedData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div style={{ width: '100%', height: '500px', padding: '1rem' }}>
      <h1>{id} - Stock Price Visualization</h1>
      <ResponsiveContainer>
        <LineChart data={stockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
