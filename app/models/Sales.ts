import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalPrice: { type: Number, required: true },
});

const Sales = mongoose.models.Sales || mongoose.model("Sales", salesSchema);
export default Sales;