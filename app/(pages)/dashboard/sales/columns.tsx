"use client"

import { ColumnDef } from "@tanstack/react-table"
import SalesDialog from "./SalesDialog"
import { deleteSale, updateSale } from "./actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Sales = {
    id: string
    name: string
    amount: number
}

export const columns: ColumnDef<Sales>[] = [
    {
        accessorKey: "id",
        header: "المعرف",
    },
    {
        accessorKey: "name",
        header: "الاسم",
    },
    {
        accessorKey: "amount",
        header: "الكميه",
    },
    {
        header: () => <div className="text-center">العمليات</div>,
        id: "actions",
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-2 justify-center w-max">
                    <SalesDialog id={row.original.id} name={row.original.name} amount={row.original.amount} edit={true} saleAction={updateSale} />
                    <SalesDialog id={row.original.id} del={true} saleAction={deleteSale} />
                </div>
            );
        },
    }
]