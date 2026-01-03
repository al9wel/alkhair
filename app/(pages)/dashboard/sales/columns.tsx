"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "تم التسليم" | "جاري المعالجه" | "فشل" | "نجاح"
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "الحاله",
    },
    {
        accessorKey: "email",
        header: "الايميل",
    },
    {
        accessorKey: "amount",
        header: "الكميه",
    },
]