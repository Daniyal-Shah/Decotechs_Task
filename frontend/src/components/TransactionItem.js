import React from "react";
import FeatherIcon from "feather-icons-react";

function TransactionItem(props) {
  let { amount, description, category, method_of_payment } = props.data;
  return (
    <div className="p-3 rounded shadow mb-3" style={{ background: "#f2f2f2" }}>
      <div className="row">
        <div className="col">{amount}</div>
        <div className="col">{description}</div>
        <div className="col">{category}</div>
        <div className="col">{method_of_payment}</div>
        <div className="col">
          <FeatherIcon icon="edit" size="24" className="me-5" />
          <FeatherIcon icon="trash" size="24" />
        </div>
      </div>
    </div>
  );
}

export default TransactionItem;
