import React, { useState, useEffect } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Transaction from './Transaction';

const Overview = () => {
  const [isRunning, setIsRunning] = useState(false);
  const toggleFunctionality = () => {
    setIsRunning(prevState => !prevState);
    // Stop or start active trades based on isRunning
    if (!isRunning) {
      stopActiveTrades();
    } else {
      startActiveTrades();
    }
  };

  const startActiveTrades = () => {
    console.log('Starting active trades...');
  };

  const stopActiveTrades = () => {
    console.log('Stopping active trades...');
  };

  const [balance, setBalance] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://85.10.149.248:9000/positions');
        const jsonData = await response.json();
        setBalance(jsonData.positions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up the interval when the component unmounts or when the dependencies change
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {balance.map((item, index) => (
        <div key={index} className="mt-32 mb-20 px-4 md:px-40 sm:px-1">
          <h1 className="text-lg font-semibold">Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols gap-5">
            <div
              className="border-2 rounded-lg px-5 py-9 bg-slate-200 relative"
              style={{ gridColumn: 'span 2', gridRow: '2' }}
            >
              <BiDotsHorizontalRounded
                size={30}
                color="black"
                className="absolute top-0 right-0 text-gray-500 text-xl mt-2 mr-2"
              />
              <h3 className="text-lg py-2">Balance</h3>
              <div className="flex items-center">
                <p className="font-bold text-4xl">
                  {balance !== null ? `$${item.level}` : 'Loading...'}{' '}
                </p>
                <span className="text-white border text-lg rounded-lg py-1 px-2 ml-2 mt-2 box-content w-20 text-center">
                  <Transaction amount={item.level} />
                </span>
              </div>
            </div>

            <div
              className="flex items-center"
              style={{ gridColumn: 'span 1', gridRow: '2' }}
            >
              {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded px-6 py-6">
                Stop All
              </button> */}
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded px-6 py-6" onClick={toggleFunctionality}>
        {isRunning ? 'Start All ' : 'Stop All '}
      </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Overview;
