"use server";
import Sales from "@/app/models/Sales";
import { SalesType } from "../../../components/forms/SalesForm";

export async function createSale1(sale: Omit<SalesType, "id">) {
    const data = { ...sale, amount: parseInt(sale.amount!) }
    try {
        await Sales.create(data)
    } catch (error) {
        console.error(error);
        return { error: "فشل في انشاء المبيعات" };
    }
}

export async function updateSale1(sale: SalesType) {
    const data = { ...sale, amount: parseInt(sale.amount!) }
    try {
        await Sales.findByIdAndUpdate(data._id,data,{ new: true, runValidators: true })
    } catch (error) {
        console.error(error);
        return { error: "فشل في تعديل المبيعات" };
    }
}
export async function deleteSale1(id: string) {
    try {
      await Sales.findByIdAndDelete(id)
    } catch (error) {
        console.error(error);
        return { error: "فشل في حذف المبيعات" };
    }
}

