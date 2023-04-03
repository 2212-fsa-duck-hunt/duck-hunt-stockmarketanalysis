"use client"
import React from 'react';
import LinearRegression from '../../LinearRegression';
const listOfStocks = require('../../listOfStocks.JSON');

const PredictionPage = ({ params }) => {
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
      <h1>Prediction for {symbol} Stock</h1>
      <LinearRegression symbol={symbol}/>
    </div>
  );
};

export default PredictionPage;