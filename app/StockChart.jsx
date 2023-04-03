import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const StockChart = (props) => {
  const [chartData, setChartData] = useState({ series: [], options: {} });
  const [predictedData, setPredictedData] = useState([]);
  const [timeSpan, setTimeSpan] = useState('year');
  const symbol = props.symbol;

  const getTimeSpan = (timeSpan) => {
    const today = new Date();
    const toDate = today.toISOString().split('T')[0];
    let fromDate = '';

    switch (timeSpan) {
      case 'month':
        today.setMonth(today.getMonth() - 1);
        fromDate = today.toISOString().split('T')[0];
        return { from: fromDate, to: toDate, limit: 30 };
      case 'year':
        today.setFullYear(today.getFullYear() - 1);
        fromDate = today.toISOString().split('T')[0];
        return { from: fromDate, to: toDate, limit: 250 };
      case '3years':
        today.setFullYear(today.getFullYear() - 3);
        fromDate = today.toISOString().split('T')[0];
        return { from: fromDate, to: toDate, limit: 750 };
      default:
        return {};
    }
  };

  const fetchData = async () => {
    const stocksTicker = symbol;
    const multiplier = 1;
    const timespan = 'day';
    const { from, to, limit } = getTimeSpan(timeSpan);
    const adjusted = true;
    const sort = 'asc';

    const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}`, {
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

    const data = response.data;

    const seriesData = data.results.map((result) => ({
      x: new Date(result.t),
      y: [result.o, result.h, result.l, result.c],
    }));

    setChartData({
      series: [{ data: seriesData }],
      options: {
        chart: {
          type: 'candlestick',
        },
        xaxis: {
          type: 'category',
          title: {
            text: 'Date',
            offsetY: 15,
          },
          labels: {
            show: false,
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
        title: {
          text: `${stocksTicker} ${timespan} chart`,
          align: 'left',
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#3C90EB',
              downward: '#DF7D46',
            },
          },
        },
      },
    });

  };

  const fetchPredictions = async () => {
    const response = await axios.post('http://localhost:5000/predict', { dataset: chartData.series[0].data });
    setPredictedData(response.data);
  };

  const updateChartDataWithPredictions = () => {
    if (predictedData.length > 0) {
      const seriesData = chartData.series[0].data.map((data, index) => ({
        x: data.x,
        y: [predictedData[index], data.y[1], data.y[2], data.y[3]],
      }));

      setChartData({
        ...chartData,
        series: [{ data: seriesData }],
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [timeSpan]);

  useEffect(() => {
    fetchPredictions();
  }, [chartData]);

  useEffect(() => {
    updateChartDataWithPredictions();
  }, [predictedData]);


  const handleTimeSpanChange = (event) => {
    setTimeSpan(event.target.value);
  };

  return (
    <div>
      <select value={timeSpan} onChange={handleTimeSpanChange}>
        <option value="month">Last Month</option>
        <option value="year">Last Year</option>
        <option value="3years">Last 3 Years</option>
      </select>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="candlestick"
      />
    </div>
  );
};

export default StockChart;