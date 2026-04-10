import React from 'react';


  const Card = ({ title, value, pillText, trend, period }) => {
    return (
      <div className="p-4 border rounded-xl shadow-sm">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              trend === "up"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {pillText}
          </span>
          <span className="text-xs text-gray-400">{period}</span>
        </div>
      </div>
    )};

function StatCard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card title="Revenue" value="$10,000" pillText="+12%" trend="up" period="Last month" />
      <Card title="Users" value="1,200" pillText="-5%" trend="down" period="Last week" />
      <Card title="Orders" value="320" pillText="+8%" trend="up" period="Today" />
    </div>
  );
};

export default StatCard;