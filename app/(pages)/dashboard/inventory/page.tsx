import { allowedRole } from "@/app/lib/roles";


const InventoryPage = async () => {
    await allowedRole("admin");

    return (
        <div className="mt-16">
            <div className="flex justify-center items-center text-7xl text-black dark:text-white">
                المخزون
            </div>
        </div>
    )
}
export default InventoryPage;