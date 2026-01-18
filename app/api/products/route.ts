import connectToDatabase from "@/app/lib/mongodb";
import Products from "@/app/models/Products";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await connectToDatabase();
        const products = await Products.find({});
        return NextResponse.json({ success: true, data: products }, { status: 200 });
    }
    catch {
        return NextResponse.json({ success: false, error: "فشل في جلب البيانات" }, { status: 400 });
    }
}