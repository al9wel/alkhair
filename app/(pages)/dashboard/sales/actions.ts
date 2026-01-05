"use server";

export async function createSale(state:{message: string, status: number},formData: FormData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const amount = formData.get("amount");

  // محاكاة عملية حفظ لمدة ثانية ونص
  await new Promise((res) => setTimeout(res, 1500));

  console.log("SERVER ACTION:", { name, amount, id });

    if (!name || !amount) return {message: "فشل في إنشاء المبيعات. الرجاء المحاولة مرة أخرى." , status: 400};
    return {message: "تم إنشاء المبيعات بنجاح!", status: 200};
}
export async function updateSale(state:{message: string, status: number},formData: FormData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const amount = formData.get("amount");

  // محاكاة عملية حفظ لمدة ثانية ونص
  await new Promise((res) => setTimeout(res, 1500));

  console.log("SERVER ACTION:", { name, amount, id });

    if (!name || !amount) return {message: "فشل في تعديل المبيعات. الرجاء المحاولة مرة أخرى." , status: 400};
    return {message: "تم تعديل المبيعات بنجاح!", status: 200};
}

export async function deleteSale(state:{message: string, status: number},formData: FormData) {
  const id = formData.get("id");
  // محاكاة عملية حفظ لمدة ثانية ونص
  await new Promise((res) => setTimeout(res, 1500));
  console.log("SERVER ACTION: Delete", { id });
    return {message: "تم حذف المبيعات بنجاح!", status: 200};
}
