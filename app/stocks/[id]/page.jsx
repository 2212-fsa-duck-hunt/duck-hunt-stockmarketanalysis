"use client"
import StockVisualization from '../../StockVisualization';
import StockChart from '../../StockChart';
import LinearModelVisualization from '../../LinearModelVisualization';
import { Buffer } from "buffer";
import protobuf from "protobufjs";
const listOfStocks = require('../../listOfStocks.JSON');
import { useState, useEffect } from 'react';
// import "../../../public/stocks.css";
import Michelle from '@/app/michelle/page';

const AppViz = ({ params }) => {
  //graphs info
  const listOfSymbols = listOfStocks.map((element) => element.Symbol);
  const listOfNames = listOfStocks.map((element) => { return element.Name.split(' ').join('').toLowerCase() });
  let symbol = '';
  if (listOfSymbols.includes(params.id.toUpperCase())) {
    symbol = params.id.toUpperCase();
  } else if (listOfNames.includes(params.id.toLowerCase())) {
    //amazon
    let value = params.id.toLowerCase();
    let index = listOfNames.indexOf(value);
    symbol = listOfSymbols[index];
  } else {
    console.log('symbol/name not found')
  }

  return (
    <div>
      {/* <Michelle symbol={symbol} /> */}
      <div id="candlestick" style={{ width: '70%', margin: '0 auto' }}>
        <StockChart symbol={symbol} />
        <LinearModelVisualization />
      </div>
    </div>
    // <div style={{ width: '70%', margin: '0 auto' }}>
    //   {/* <StockVisualization /> */}
    //   <StockChart symbol={symbol} />
    //   <LinearModelVisualization />
    // </div>
  );
};

export default AppViz;