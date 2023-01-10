import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllTransactions, getAssests } from "../api/users.api";
import AssestsPanel from "../components/AssestsPanel";
import TransactionModal from "../components/TransactionModal";
import TransactionsTable from "../components/TransactionsTable";
import FeatherIcon from "feather-icons-react";
import LoginUser from "../components/LoginUser";
import { useNavigate } from "react-router-dom";
import UpdateAssets from "../components/UpdateAssets";
import { toast } from "react-toastify";

function DashboardPage() {
  const [showTransactionModal, setTransactionModal] = useState(false);

  const [assetsModal, setAssetsModal] = useState(true);
  const [assets, setAssets] = useState({ cash: 0, savings: 0, bank: 0 });
  const [refreshAssets, setRefreshAssets] = useState(false);
  const [allTransactions, setAllTransactions] = useState([]);
  const [refreshTransactions, setRefreshTransactions] = useState(false);

  let isTokenAvailable = localStorage.getItem("user_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (isTokenAvailable && isTokenAvailable !== "") {
      fetchAssets();
      fetchTransactions();
    } else {
      navigate("/");
    }
  }, [showTransactionModal, refreshAssets, refreshTransactions, assetsModal]);

  const fetchAssets = async () => {
    try {
      const { data } = await getAssests();
      setAssets(data.response.assets);
    } catch (error) {}
  };

  const fetchTransactions = async () => {
    try {
      const { data } = await getAllTransactions();
      setAllTransactions(data.response.transactions);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {isTokenAvailable && isTokenAvailable !== "" && (
        <div style={{ position: "relative" }}>
          <LoginUser name={localStorage.getItem("user_name")} />
          {showTransactionModal && (
            <TransactionModal setTransactionModal={setTransactionModal} />
          )}
          {assetsModal && <UpdateAssets setAssetsModal={setAssetsModal} />}

          <AssestsPanel assets={assets} />
          <div className="container d-flex justify-content-center gap-3">
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
            <button
              className="btn px-4 py-2"
              style={{ border: "1px solid black" }}
              onClick={() => {
                setAssetsModal(true);
              }}
            >
              <span>Update Assets</span>
              <FeatherIcon icon="plus" size="24" className="ms-5" />
            </button>
          </div>
          <TransactionsTable
            allTransactions={allTransactions}
            setAllTransactions={setAllTransactions}
            refreshAssets={refreshAssets}
            setRefreshAssets={setRefreshAssets}
            refreshTransactions={refreshTransactions}
            setRefreshTransactions={setRefreshTransactions}
          />
        </div>
      )}
    </>
  );
}

export default DashboardPage;
