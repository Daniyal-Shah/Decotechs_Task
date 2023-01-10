import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function TransactionsGraphs({ data }) {
  var monthsList = [
    { month: "Janurary", amount: 0 },
    { month: "February", amount: 0 },
    { month: "March", amount: 0 },
    { month: "April", amount: 0 },
    { month: "May", amount: 0 },
    { month: "June", amount: 0 },
    { month: "July", amount: 0 },
    { month: "August", amount: 0 },
    { month: "September", amount: 0 },
    { month: "October", amount: 0 },
    { month: "November", amount: 0 },
    { month: "December", amount: 0 },
  ];

  let filterData = () => {
    data.map((item) => {
      let month = parseInt(item.createdAt.split("T")[0].split("-")[1]) - 1;
      monthsList[month].amount = monthsList[month].amount + item.amount;
    });
    return monthsList;
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5">
      <h1 className="display-5 mb-5">Transactions over all months </h1>
      <LineChart width={900} height={400} data={filterData()}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default TransactionsGraphs;
