import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAllTransactions } from "../api/users.api";
import TransactionItem from "./TransactionItem";
import TransactionsGraphs from "./TransactionsGraphs";

function TransactionsTable(props) {
  const {
    allTransactions,
    setAllTransactions,
    refreshAssets,
    setRefreshAssets,
    refreshTransactions,
    setRefreshTransactions,
  } = props;

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
  const [selectedMonth, setCurrentMonth] = useState("January");
  const [month, setMonth] = useState({ label: "Janurary", value: "01" });

  const filterMonthWise = (e) => {
    setRefreshTransactions(!refreshTransactions);
    if (e.target.value == "all") {
      setCurrentMonth(e.target.value);
    } else {
      setCurrentMonth(e.target.value);
      monthsList.map((item) => {
        if (item.label == e.target.value) {
          console.log(item);
          setMonth(item);
        }
      });
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
              {monthsList.map((item) => (
                <option value={item.label}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {allTransactions.map(
        (item) =>
          item.createdAt.split("T")[0].split("-")[1] == month.value && (
            <TransactionItem
              refreshTransactions={refreshTransactions}
              setRefreshTransactions={setRefreshTransactions}
              refreshAssets={refreshAssets}
              setRefreshAssets={setRefreshAssets}
              data={item}
            />
          )
      )}

      <TransactionsGraphs data={allTransactions} />
    </div>
  );
}

export default TransactionsTable;
