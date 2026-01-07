import connectToDatabase from "@/app/lib/mongodb";
import Sales from "@/app/models/Sales";
import {  NextResponse } from "next/server";
export async function GET() {
    try {
        await connectToDatabase();
        const sales = await Sales.find({});
        return NextResponse.json({ success: true, data: sales }, { status: 200 });
    } 
    catch  {
        return NextResponse.json({ success: false, error: "فشل في جلب البيانات" },{ status: 400 });
    }
}