"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/table"
import { Button } from "./button"
import { useState } from "react"
import { Input } from "./input"
import CreateSaleDialog from "@/app/components/dialogs/sales/CreateSaleDialog"
import UpdateSaleDialog from "@/app/components/dialogs/sales/UpdateSaleDialog"
import DeleteSaleDialog from "@/app/components/dialogs/sales/DeleteSaleDialog"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
}


export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    })
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState("")
    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
            sorting,
            globalFilter,
        },
        getCoreRowModel: getCoreRowModel(),
        onPaginationChange: setPagination,
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
    })
    return (
        <>
            <div className="flex justify-between gap-4 p-4 pb-2 items-center">
                <Input
                    placeholder="ابحث..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="max-w-full"
                />
                <CreateSaleDialog />
            </div>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                                < TableHead className="text-center" >
                                    <h1>العمليات</h1>
                                </TableHead>
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                    <TableCell className="flex justify-center items-center gap-2" >
                                        <UpdateSaleDialog sale={row.original} />
                                        <DeleteSaleDialog sale={row.original} />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    لايوجد بيانات.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div >
            <div className="flex items-center justify-start space-x-2 py-4">
                <Button
                    className="bg-primary1 hover:bg-primary-hover text-white cursor-pointer"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    التالي
                </Button>
                <Button
                    size="sm"
                    className="bg-primary1 hover:bg-primary-hover text-white cursor-pointer"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    السابق
                </Button>
            </div>
        </>
    )
}