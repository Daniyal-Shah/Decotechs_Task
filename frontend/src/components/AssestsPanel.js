import React from "react";
import FeatherIcon from "feather-icons-react";

function AssestsPanel({ assets }) {
  return (
    <div className="row p-5 pt-0 gap-5">
      <div
        className="col shadow rounded p-3 d-flex justify-content-around"
        style={{ background: "lightgreen", fontSize: 17, fontWeight: "bold" }}
      >
        <FeatherIcon icon={"dollar-sign"} size="24" />
        <span>Cash</span>
        <span> $ {assets.cash}</span>
      </div>

      <div
        className="col shadow rounded p-3 d-flex justify-content-around"
        style={{ background: "lightblue", fontSize: 17, fontWeight: "bold" }}
      >
        <FeatherIcon icon={"archive"} size="24" />
        <span>Savings </span>
        <span> $ {assets.savings}</span>
      </div>
      <div
        className="col shadow rounded p-3 d-flex justify-content-around"
        style={{ background: "lightyellow", fontSize: 17, fontWeight: "bold" }}
      >
        <FeatherIcon icon={"briefcase"} size="24" />
        <span>{"Bank"} </span>
        <span> $ {assets.bank}</span>
      </div>
    </div>
  );
}

export default AssestsPanel;
