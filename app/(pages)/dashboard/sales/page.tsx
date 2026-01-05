import Header from "@/app/components/layout/Header";
import { columns, Sales } from "./columns"
import { DataTable } from "./data-table"
import { Input } from "@/app/components/ui/input"
import SalesDialog from "./SalesDialog";
import { createSale } from "./actions";
// import { Label } from "@/components/ui/label"

async function getData(): Promise<Sales[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "محمد عبدالله بكير",
            amount: 250,
        },
        {
            id: "728ed52f",
            name: "سالم احمد الصويل",
            amount: 100,
        },
        {
            id: "728ed52f",
            name: "خالد حسن محمد",
            amount: 304,
        },
    ]
}

const SalesPage = async () => {
    const data = await getData()
    return (
        <div className="mt-16 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <Header title="اداره المبيعات" desc="صفحة مخصصه لاداره عمليات المبيعات" />
                {/* Content */}
                <div className="flex flex-col gap-4 p-2 bg-light dark:bg-dark-content rounded-lg border border-border1/30 dark:border-border1/7">
                    <div className="flex justify-between gap-4 p-4 pb-2 items-center text-black/70 dark:text-light-text">
                        <Input type="email" className="" placeholder="ابحث..." />
                        <SalesDialog saleAction={createSale} />
                    </div>
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </div>
    )
}
export default SalesPage;
