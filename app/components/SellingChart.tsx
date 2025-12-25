import { TrendingUp } from 'lucide-react'
import Legend from './Legend'
const COLORS = {
    alaqy: "#60A5FA",
    alhna: "#F87171",
    thlj: "#FBBF24",
};
const SellingChart = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* title */}
            <div className="flex justify-between items-center text-black/70 dark:text-light-text">
                <h3 className="text-sm md:text-base font-semibold">الربح</h3>
                <div className="p-2 rounded-full bg-green-600 text-white">
                    <TrendingUp size={20} />
                </div>
            </div>

            {/* chart */}
            <div >
            </div>

            {/* legend */}
            <div className="flex justify-center gap-4 text-sm">
                <Legend color={COLORS.alaqy} label="المبيعات" />
                <Legend color={COLORS.alhna} label="المسحوبات" />
                <Legend color={COLORS.thlj} label="المصروفات" />
            </div>
        </div>
    )
}

export default SellingChart
