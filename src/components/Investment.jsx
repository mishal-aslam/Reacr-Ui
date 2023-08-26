import React, { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["#", "Asset", "Symbol", "Epic" ,"Direction" ,  "Number of shares", "Open Position Price", "Open Position Date", "Profit/Loss"];

const TABLE_ROWS = [
  {
    Asset: "Apple Inc.",
    Symbol: "AAPL",
    Numberofshares: "5",
    Pricebought: "$50.000",
    Datebought: "24 july 2023",
    ProfitLoss: "-8"
  },
  {
    Asset: "Nvidia",
    Symbol: "NDQ",
    Numberofshares: "3",
    Pricebought: "$40.000",
    Datebought: "23 july 233",
    ProfitLoss: "70"
  },
  {
    Asset: "Alphabet",
    Symbol: "GOOGL",
    Numberofshares: "7",
    Pricebought: "$40.000",
    Datebought: "33 jiulu 3434",
    ProfitLoss: "70"
  }
];

export default function Investment() {
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://85.10.149.248:9000/positions");
        const jsonData = await response.json();
        setTableRows(jsonData.positions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
     <div className='px-2 mt-24 mb-10 sm:px-0 md:px-20 '>
        <h3 className='text-lg font-medium'>Funded Investments</h3>

        <div className='overflow-x-auto '>
          <table className="w-full min-w-max table-auto text-left mt-6 ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableRows.map((item, index) => {
                const isLast = index === tableRows.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                const count = index + 1;

                const percentage = parseFloat(item.percentageChange);
                const colorClass = percentage >= 0 ? "text-green-600" : "text-red-600";
                const sign = percentage >= 0 ? "+" : "-";

                return (
                  <tr key={item.dealId}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {count}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.instrumentName}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        AAPL
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.epic}       
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.direction}
                      </Typography>
                    </td>

                    <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.size}
                      </Typography>
                    </td>

                    <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.level}
                      </Typography>
                    </td>

                    <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.createdDate}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" className={`font-normal ${colorClass}`}>
                        {sign}{Math.abs(percentage)}%
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
