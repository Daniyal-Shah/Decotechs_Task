import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAssests } from "../api/users.api";
import AssestsPanel from "../components/AssestsPanel";
import TransactionModal from "../components/TransactionModal";
import TransactionsTable from "../components/TransactionsTable";
import FeatherIcon from "feather-icons-react";
import TransactionsGraphs from "../components/TransactionsGraphs";
function DashboardPage() {
  const [showTransactionModal, setTransactionModal] = useState(false);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const data = await getAssests();
      console.log(data);
    } catch (error) {}
  };

  return (
    <div style={{ position: "relative" }}>
      {showTransactionModal && (
        <TransactionModal setTransactionModal={setTransactionModal} />
      )}
      <AssestsPanel />
      <div className="container ">
        <button
          className="btn px-4 py-2"
          style={{ border: "1px solid black" }}
          onClick={() => {
            setTransactionModal(true);
          }}
        >
          <span>Create New Transaction</span>
          <FeatherIcon icon="plus" size="24" className="ms-5" />
        </button>
      </div>
      <TransactionsTable />
    </div>
  );
}

export default DashboardPage;
