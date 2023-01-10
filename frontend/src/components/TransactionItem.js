import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { deleteTransaction } from "../api/users.api";
import { toast } from "react-toastify";
import EditTransaction from "./EditTransaction";

function TransactionItem(props) {
  let { amount, description, category, method_of_payment, _id } = props.data;
  const [editTransactionModal, setEditTransactionModal] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteTransaction(_id);
      toast.success("Transaction deleted");
      props.setRefreshTransactions(!props.refreshTransactions);
      props.setRefreshAssets(!props.refreshAssets);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-3 rounded shadow mb-3" style={{ background: "#f2f2f2" }}>
      {editTransactionModal && (
        <EditTransaction
          setEditTransactionModal={setEditTransactionModal}
          data={props.data}
          refreshTransactions={props.refreshTransactions}
          setRefreshTransactions={props.setRefreshTransactions}
          refreshAssets={props.refreshAssets}
          setRefreshAssets={props.setRefreshAssets}
        />
      )}
      <div className="row">
        <div className="col">{amount}</div>
        <div className="col">{description}</div>
        <div className="col">{category}</div>
        <div className="col">{method_of_payment}</div>
        <div className="col">
          <FeatherIcon
            icon="edit"
            size="24"
            className="me-5"
            onClick={() => {
              setEditTransactionModal(!editTransactionModal);
            }}
          />
          <FeatherIcon icon="trash" size="24" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default TransactionItem;
