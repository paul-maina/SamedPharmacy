import React from 'react'

function Records() {
    const records = [
    {
      name: "John Doe",
      total: "$500",
      date: "2026-04-10",
      balance: "$200",
    },
    {
      name: "Mary Wanjiku",
      total: "$800",
      date: "2026-04-12",
      balance: "$0",
    },
  ];

  return (
    <>
        <div className="flex items-center justify-between m-2 p-4 font-medium">
            <h1>CLIENT</h1>
            <h1>TOTAL</h1>
            <h1>ISSUED DATE</h1>
            <h1>BALANCE</h1>
            <h1>ACTIONS</h1>
        </div>

    
        {records.map((rec, index) => (
            <div key={index}
                 className="flex items-center justify-between m-2 p-4 ">
                <span>{rec.name}</span>
                <span>{rec.total}</span>
                <span>{rec.date}</span>
                <span>{rec.balance}</span>
                <button className="text-blue-500 text-sm">View</button>
            </div>)
        )};
        
    </>
    
    
  )
}

export default Records;