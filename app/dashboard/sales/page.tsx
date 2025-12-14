import { checkRole } from "@/app/utils/roles";
import { redirect } from "next/navigation";

const SalesPage = async () => {
    const role = await checkRole("admin")
    if (!role) {
        redirect('/dashboard')
    }
    return (
        <div className="mt-16">
            <div className="flex justify-center items-center text-7xl text-black dark:text-white">
                المبيعات
            </div>
        </div>
    )
}
export default SalesPage;