import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

export default function Stocks (stock) {
  return (
          <div className="stock">
            <h2>Name: {props.stock.name}</h2>
            <h2>Price: {props.stock.price}</h2>
          </div>
        )
};
