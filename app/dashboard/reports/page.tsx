import { allowedRole } from "@/app/utils/roles";


const ReportsPage = async () => {
    await allowedRole("admin");

    return (
        <div className="mt-16">
            <div className="flex justify-center items-center text-7xl text-black dark:text-white">
                التقارير
            </div>
        </div>
    )
}
export default ReportsPage;