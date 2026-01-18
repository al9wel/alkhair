"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/app/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { SalesType } from "@/app/components/forms/SalesForm"
import { Badge } from "@/app/components/ui/badge"

export type Sales = {
    _id: string
    name: string
    amount: number
}


export const columns: ColumnDef<SalesType>[] = [
    // {
    //     accessorKey: "_id",
    //     header: "المعرف",
    // },
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
        accessorKey: "products",
        header: () => <div className="flex justify-center items-center">المنتجات</div>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center items-center gap-1">
                    {row.original.products.map((p) => <Badge key={p.productId} variant={"outline"} className="text-black/70 dark:text-light-text" > {`${p.quantity} ${p.name}`}</Badge>)}
                </div>
            )
        }
    },
    {
        accessorKey: "totalPrice",
        header: "السعر الاجمالي",
        cell: ({ row }) => <Badge className=" bg-green-600/80 text-white" >{`${row.original.totalPrice}  ريال `}</Badge>
    },
]