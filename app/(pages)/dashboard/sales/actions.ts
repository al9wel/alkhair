"use server";
import Sales from "@/app/models/Sales";
import { SalesType } from "../../../components/forms/SalesForm";
import connectToDatabase from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";
export async function createSale1(data: Omit<SalesType, "id">) {
    if (!data.name) {
        return {
            success: false,
            field: "name",
            message: "الاسم مطلوب",
        };
    }

    if (!data.amount) {
        return {
            success: false,
            field: "amount",
            message: "الكمية مطلوبة ويجب أن تكون أكبر من صفر",
        };
    }
    try {
        await connectToDatabase();
        await Sales.create(data);
        revalidatePath("/dashboard/sales")
        return {
            success: true,
        };
    } catch {
        return {
            success: false,
            message: "حصل خطأ أثناء الحفظ في قاعدة البيانات",
        };
    }
}
export async function updateSale1(data: SalesType) {
        if (!data.name) {
        return {
            success: false,
            field: "name",
            message: "الاسم مطلوب",
        };
    }
    if (!data.amount) {
        return {
            success: false,
            field: "amount",
            message: "الكمية مطلوبة ويجب أن تكون أكبر من صفر",
        };
    }
    try {
        await connectToDatabase();
        await Sales.findByIdAndUpdate(data._id, data, {
            new: true,
            runValidators: true,
        });
        revalidatePath("/dashboard/sales")
        return {
            success: true,
        };
    } catch {
        return {
            success: false,
            message: "حصل خطأ أثناء لتعديل في قاعدة البيانات",
        };
    }
}
export async function deleteSale1(id: string) {
    try {
        await connectToDatabase();
        await Sales.findByIdAndDelete(id);
        revalidatePath("/dashboard/sales")
        return {
            success: true,
        };
    } catch {
        return {
            success: false,
            message: "حصل خطأ أثناء الحذف في قاعدة البيانات",
        };
    }
}
