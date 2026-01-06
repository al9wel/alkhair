import Header from "@/app/components/layout/Header";
import { columns, Sales } from "./columns"
import { DataTable } from "../../../components/ui/data-table"
import SalesDialog from "./SalesDialog";
import { createSale } from "./actions";

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
    const data: Sales[] = await getData();

    return (
        <div className="mt-16 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <Header title="اداره المبيعات" desc="صفحة مخصصه لاداره عمليات المبيعات" />
                {/* Content */}
                <div className="flex flex-col gap-4 p-2 bg-light dark:bg-dark-content rounded-lg border border-border1/30 dark:border-border1/7">
                    <DataTable columns={columns} data={data} >
                        <SalesDialog saleAction={createSale} />
                    </DataTable>
                </div>
            </div>
        </div >
    )
}
export default SalesPage;
