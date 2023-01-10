import React from "react";
import FeatherIcon from "feather-icons-react";
function LoginUser({ name }) {
  return (
    <div
      className="d-flex justify-content-between align-items-center mb-4 shadow"
      style={{ background: "#f2f2f2" }}
    >
      <div>
        <span className="display-6 ms-5">Expense Tracker</span>
      </div>

      <div className="d-flex">
        <span className="p-4 d-flex">
          <FeatherIcon icon="user" size="24" className="mx-2" />
          <p style={{ fontSize: 15, fontWeight: "bold" }}> {name}</p>
        </span>
        <span
          className="p-4 d-flex text-danger"
          onClick={() => {
            localStorage.removeItem("user_name");
            localStorage.removeItem("user_token");
            localStorage.removeItem("user_id");
          }}
        >
          <p>Logout</p>
          <FeatherIcon icon="log-out" size="24" className="mx-2" />
        </span>
      </div>
    </div>
  );
}

export default LoginUser;
