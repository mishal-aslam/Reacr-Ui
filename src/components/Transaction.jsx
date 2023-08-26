import React from 'react'

const Transaction = ({ amount }) => {
    const isProfit = amount >= 0;
    const symbol = isProfit ? "+" : "-";
    const bgColor = isProfit ? "green" : "red";
  
    return (
      <div style={{ backgroundColor: bgColor }}>
        {symbol} {Math.abs(amount )}
      </div>
    );
  };

export default Transaction