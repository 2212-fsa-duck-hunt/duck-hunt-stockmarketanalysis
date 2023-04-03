import { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LinearModelVisualization = () => {
  const [coefficients] = useState([-0.43751381, 0.9866552, 0.89248448, 0.01073315, -0.45306278]);
  const [intercept] = useState(-0.0015033866174141153);
  const [mse] = useState(0.0004173078183354473);

  const chartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Linear Regression Model Coefficients',
    },
    font: {
      family: 'Poppins',
      size: 24,
      color: 'black',
    },
    xaxis: {
      categories: ['Close', 'High', 'Low', 'Volume', 'VWAP'],
    },
  };

  const chartSeries = [
    {
      name: 'Coefficient',
      data: coefficients.map(parseFloat),
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="bar" />
      {/* <p>Intercept: {intercept}</p>
      <p>Mean Squared Error: {mse}</p> */}
    </div>
  );
};

export default LinearModelVisualization;
