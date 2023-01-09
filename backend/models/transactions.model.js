import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    amount: { type: mongoose.SchemaTypes.Number },
    category: { type: String, default: "N/A" },
    description: { type: String, default: "N/A" },
    method_of_payment: { type: String, default: "N/A" },
  },
  {
    timestamps: true,
  }
);

const TransactionsModel = mongoose.model("transactions", transactionSchema);

export default TransactionsModel;
