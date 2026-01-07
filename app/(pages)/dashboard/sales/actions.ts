"use server";
import dbConnect from "@/app/lib/mongodb";
import Sales from "@/app/models/Sales";
import { revalidatePath } from "next/cache";
export async function createSale(state:{message: string, status: number},formData: FormData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const amount = formData.get("amount");
      if (!name || !amount) {
      return {message: "الرجاء ملء جميع الحقول المطلوبة." , status: 400}; 
    }
    try {
      await dbConnect();
      await Sales.create({
        name,
        amount,
      })
      revalidatePath('/');
      return {message: "تم إنشاء المبيعات بنجاح!", status: 200};
    } 
    catch {
      return {message: "فشل في إنشاء المبيعات. الرجاء المحاولة مرة أخرى." , status: 400};
    }
}
export async function updateSale(state:{message: string, status: number},formData: FormData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const amount = formData.get("amount");
    if (!name || !amount) {
      return {message: "الرجاء ملء جميع الحقول المطلوبة." , status: 400}; 
    }
    try {
      await dbConnect();
      await Sales.findByIdAndUpdate(id, {
        name,
        amount,
        },
        { new: true, runValidators: true }
      )
      revalidatePath('/');
      return {message: "تم تعديل المبيعات بنجاح!", status: 200};
    } 
    catch {
      return {message: "فشل في تعديل المبيعات. الرجاء المحاولة مرة أخرى." , status: 400};
    }
}

export async function deleteSale(state:{message: string, status: number},formData: FormData) {
  const id = formData.get("id");
  try {
      await dbConnect();
      await Sales.findByIdAndDelete(id)
      revalidatePath('/');
      return {message: "تم حذف المبيعات بنجاح!", status: 200};
    } 
    catch {
      return {message: "فشل في حذف المبيعات. الرجاء المحاولة مرة أخرى." , status: 400};
    }
}

