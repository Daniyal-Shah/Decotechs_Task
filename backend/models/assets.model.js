import mongoose from "mongoose";

const assetsSchema = new mongoose.Schema({
  cash: { type: mongoose.SchemaTypes.Number, default: 0 },
  savings: { type: mongoose.SchemaTypes.Number, default: 0 },
  bank: { type: mongoose.SchemaTypes.Number, default: 0 },
});

const AssetsModel = mongoose.model("assets", assetsSchema);

export default AssetsModel;
