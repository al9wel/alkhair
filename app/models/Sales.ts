import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true }
});

const Sales = mongoose.models.Sales || mongoose.model("Sales", salesSchema);
export default Sales;