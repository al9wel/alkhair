"use client"

import { ColumnDef } from "@tanstack/react-table"
import SalesDialog from "./SalesDialog"
import { deleteSale, updateSale } from "./actions"
import { Button } from "@/app/components/ui/button"
import { ArrowUpDown } from "lucide-react"

export type Sales = {
    _id: string
    name: string
    amount: number
}

export const columns: ColumnDef<Sales>[] = [
    {
        accessorKey: "_id",
        header: "المعرف",
    },
    {
        accessorKey: "name",
        header: "الاسم",
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <div className="flex items-center justify-center">
                    <Button
                        // variant="ghost"
                        className=" bg-primary1 text-white hover:bg-primary-hover/30 cursor-pointer"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        الكميه
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            return (
                <div className="flex items-center justify-center">
                    {row.original.amount}
                </div>
            );
        },
    },
    {
        header: () => <div className="text-center">العمليات</div>,
        id: "actions",
        cell: ({ row }) => {
            const data = {
                id: row.original._id,
                name: row.original.name,
                amount: row.original.amount
            }
            return (
                <div className="flex items-center gap-2 justify-center">
                    <SalesDialog data={data} mode={"update"} saleAction={updateSale} />
                    <SalesDialog data={data} mode={"delete"} saleAction={deleteSale} />
                </div>
            );
        },
    }
]