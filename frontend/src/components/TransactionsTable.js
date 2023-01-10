import React, { useState } from "react";
import TransactionItem from "./TransactionItem";
import TransactionsGraphs from "./TransactionsGraphs";

function TransactionsTable() {
  var monthsList = [
    { label: "Janurary", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];
  const [selectedMonth, setCurrentMonth] = useState("none");
  let allData = [
    {
      amount: 1200,
      category: "Shopping",
      description: "Testing",
      method_of_payment: "Cash",
      createdAt: "2023-01-09T16:51:35.595+00:00",
    },
    {
      amount: 9900,
      category: "Rent",
      description: "Testing",
      method_of_payment: "Bank",
      createdAt: "2023-02-09T16:51:35.595+00:00",
    },
    {
      amount: 1200,
      category: "Tour",
      description: "Testing",
      method_of_payment: "Cash",
      createdAt: "2023-01-09T16:51:35.595+00:00",
    },
    {
      amount: 200,
      category: "Shopping",
      description: "Testing",
      method_of_payment: "Cash",
      createdAt: "2023-08-09T16:51:35.595+00:00",
    },
  ];

  const [data, setData] = useState(allData);
  const filterMonthWise = (e) => {
    if (e.target.value == "all") {
      setCurrentMonth(e.target.value);
      setData(allData);
    } else {
      setCurrentMonth(e.target.value);
      let month = {};
      monthsList.map((item) => {
        if (item.label == e.target.value) {
          month = item;
        }
      });

      let filteredData = allData.filter(
        (item) => item.createdAt.split("T")[0].split("-")[1] == month.value
      );
      setData(filteredData);
    }
  };

  return (
    <div className="container mt-5 ">
      <div
        className="p-3 rounded mb-1 "
        style={{ fontSize: 18, fontWeight: "bold" }}
      >
        <div className="row">
          <div className="col">Amount</div>
          <div className="col">Description</div>
          <div className="col">Category</div>
          <div className="col">Payment Method</div>
          <div className="col">
            <select
              class="form-select"
              aria-label="Default select example"
              value={selectedMonth}
              onChange={filterMonthWise}
            >
              <option value={"all"}> All</option>
              {monthsList.map((item) => (
                <option value={item.label}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {data.map((item) => (
        <TransactionItem data={item} />
      ))}

      <TransactionsGraphs data={data} />
    </div>
  );
}

export default TransactionsTable;
