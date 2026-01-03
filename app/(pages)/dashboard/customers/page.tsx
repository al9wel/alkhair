import { allowedRole } from "@/app/lib/roles";
const CustomersPage = async () => {
    await allowedRole("admin");
    return (
        <div className="mt-16">
            <div className="flex justify-center items-center text-7xl text-black dark:text-white">
                العملاء
            </div>
        </div>
    )
}
export default CustomersPage;