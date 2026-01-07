import Header from "@/app/components/layout/Header";
import { columns } from "./columns"
import { DataTable } from "@/app/components/ui/data-table"
import SalesDialog from "./SalesDialog";
import { createSale } from "./actions";
import { Suspense } from "react";
import Loader from "@/app/components/ui/Loader"

async function SalesTable() {
    const res = await fetch(`${process.env.BASE_URL}/api/sales`);
    const data = await res.json();
    return (
        <DataTable columns={columns} data={data.data}>
            <SalesDialog saleAction={createSale} />
        </DataTable>
    )
}
const SalesPage = async () => {
    return (
        <div className="mt-16 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <Header title="اداره المبيعات" desc="صفحة مخصصه لاداره عمليات المبيعات" />
                {/* Content */}
                <div className="flex flex-col gap-4 p-2 bg-light dark:bg-dark-content rounded-lg border border-border1/30 dark:border-border1/7">
                    <Suspense fallback={<Loader />}>
                        <SalesTable />
                    </Suspense>
                </div>
            </div>
        </div >
    )
}
export default SalesPage;
