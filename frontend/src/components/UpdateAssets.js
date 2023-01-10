import React, { useState } from "react";
import { toast } from "react-toastify";
import FeatherIcon from "feather-icons-react";
import { updateAssests } from "../api/users.api";

function UpdateAssets({ setAssetsModal }) {
  const [cash, setCash] = useState("");
  const [bank, setBank] = useState("");
  const [savings, setSavings] = useState("");

  const handleSubmit = async () => {
    try {
      if (cash && bank && savings) {
        let payload = {
          cash: parseFloat(cash),
          bank: parseFloat(bank),
          savings: parseFloat(savings),
        };
        const { data } = await updateAssests(payload);
        console.log(data.response);
        toast.success("Transaction created successfully");
        setAssetsModal(false);
      } else {
        toast.error("All fields are must except description");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div style={{ position: "absolute", left: "40%", zIndex: 3 }}>
      <FeatherIcon
        icon="x"
        size="24"
        className="me-5"
        style={{
          position: "absolute",
          right: -40,
          top: 10,
        }}
        onClick={() => {
          setAssetsModal(false);
        }}
      />

      <div className="shadow p-5 mb-5 bg-body rounded">
        <h3 className="text-center mb-3">Update Assets</h3>
        <div className="mb-3">
          <label>Cash</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg. 2000"
            value={cash}
            onChange={(e) => {
              setCash(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Savings</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg. 2000"
            value={savings}
            onChange={(e) => {
              setSavings(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Bank</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg. 2000"
            value={bank}
            onChange={(e) => {
              setBank(e.target.value);
            }}
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAssets;
