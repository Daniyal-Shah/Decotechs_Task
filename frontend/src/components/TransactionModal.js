import React, { useState } from "react";
import { toast } from "react-toastify";
import FeatherIcon from "feather-icons-react";

function TransactionModal({ setTransactionModal }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [method_of_payment, setMOP] = useState("");
  const [categoriesOptions, setCategoriesOptions] = useState([
    "Food",
    "Fuel",
    "Bills",
    "Loan Installments",
    "Grocery",
    "Shopping",
    "Transport",
    "Medical",
    "Rent",
    "Family",
    " Gifts",
  ]);
  const [isCustomCategory, setIsCustomCategory] = useState(false);

  const handleSubmit = async () => {
    try {
      if (amount && category && method_of_payment) {
        let payload = {
          amount: parseFloat(amount),
          category,
          description,
          method_of_payment,
        };
        console.log(payload);
      } else {
        toast.error("All fields are must except description");
      }
    } catch (error) {}
  };

  return (
    <div style={{ position: "absolute", left: "35%", top: "35%" }}>
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
          setTransactionModal(false);
        }}
      />

      <div className="shadow p-5 mb-5 bg-body rounded">
        <h3 className="text-center mb-3">Create A New Transaction</h3>
        <div className="mb-3">
          <label>Amount</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg. 2000"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Category</label>

          {isCustomCategory ? (
            <>
              <input
                type="text"
                className="form-control"
                placeholder="Add Custom Category ..."
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <p
                className="text-center mt-2"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "blue",
                }}
                value={category}
                onClick={() => {
                  setCategory("");
                  setIsCustomCategory(false);
                }}
              >
                Again Show Options
              </p>
            </>
          ) : (
            <select
              class="form-select"
              aria-label="Default select example"
              value={category}
              onChange={(e) => {
                if (e.target.value == "custom") {
                  setCategory("");
                  setIsCustomCategory(true);
                } else {
                  setCategory(e.target.value);
                }
              }}
            >
              <option value="">--- none ---</option>
              {categoriesOptions.map((item) => (
                <option value={item}>{item}</option>
              ))}
              <option value="custom">------ Add Custom Category ------</option>
            </select>
          )}
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Give your feedback"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label>Method Of Payment</label>
          <select
            class="form-select"
            aria-label="Default select example"
            value={method_of_payment}
            onChange={(e) => {
              setMOP(e.target.value);
            }}
          >
            <option value="">--- none ---</option>
            <option value="Cash">Cash</option>
            <option value="Bank">Bank</option>
            <option value="Savings">Savings</option>
          </select>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionModal;
