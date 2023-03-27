"use client"
import StockVisualization from '../../StockVisualization';
import StockChart from '../../StockChart';
import LinearModelVisualization from '../../LinearModelVisualization';

const AppViz = () => {
    return (
      <div style={{ width: '70%', margin: '0 auto' }}>
        {/* <StockVisualization /> */}
        <StockChart />
        <LinearModelVisualization />
      </div>
    );
};

export default AppViz;