import React from 'react';
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

  const Card = ({ title, 
                  value, 
                  pillText, 
                  trend, 
                  period 
                }) => {
    return (
      <div className="p-4 border rounded-lg shadow-sm">
        
        <div className="flex items-center justify-between ">
          <h3 className="text-sm ">{title}</h3>
          <span
            className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${
              trend === "up"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {trend ==="up"? <IoIosTrendingUp/> : <IoIosTrendingDown/>}
            {pillText}
          </span>
        </div>

        <p className="text-xl font-bold">{value}</p>
        <p className="text-xs">{period}</p>
      </div>
    )};

function StatCard() {
  return (
    <div className="grid grid-cols-3 gap-5 m-2">

      <div className="bg-red-400 rounded-lg">
        <Card title="Revenue" value="$10,000" pillText="12%" trend="up" period="Last month" />
      </div>
      <div className="bg-sky-300 rounded-lg">
        <Card title="Users" value="1,200" pillText="5%" trend="down" period="Last week" />
      </div>
      <div className="bg-yellow-300 rounded-lg">
        <Card title="Orders" value="320" pillText="8%" trend="up" period="Today" />
      </div>
    
    </div>
  );
};

export default StatCard;