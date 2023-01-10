import React from "react";
import FeatherIcon from "feather-icons-react";

function AssestsPanel() {
  const assests = [
    {
      title: "Cash",
      amount: 0,
      bg: "lightgreen",
      icon: "dollar-sign",
    },
    {
      title: "Savings",
      amount: 1230,
      bg: "lightblue",
      icon: "archive",
    },
    {
      title: "Bank",
      amount: 12200,
      bg: "lightyellow",
      icon: "briefcase",
    },
  ];

  return (
    <div className="row p-5 gap-5">
      {assests.map((item) => (
        <div
          className="col shadow rounded p-3 d-flex justify-content-around"
          style={{ background: item.bg, fontSize: 17, fontWeight: "bold" }}
        >
          <FeatherIcon icon={item.icon} size="24" />
          <span>{item.title} </span>
          <span> $ {item.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default AssestsPanel;
