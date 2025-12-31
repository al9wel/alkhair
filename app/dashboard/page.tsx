
import { HandCoins, Receipt, ArrowDownCircle, DollarSign, TrendingDown, CreditCard, Package, BarChart3, TrendingUp, BarChart2 } from "lucide-react";
import StatCard from "../components/StatCard";
import ProfitChart from "../components/ProfitChart";
import SellingChart from "../components/SellingChart";
import Legend from "../components/Legend";
import RecentsCard from "../components/RecentsCard";
import type { Color } from "@/types/globals";


const DashboardPage = () => {
    const chartColors = [
        "#60A5FA7d",
        "#24fba57d",
        "#F871717d",
    ];
    const colors: Color[] = ["blue", "green", "red", "yellow", "purple"];
    const stats = [
        {
            title: "المبيعات",
            value: "785,000",
            icon: BarChart3,
            status: true,
            statusValue: 22,
        },
        {
            title: "المسحوبات",
            value: "104,000",
            icon: DollarSign,
            status: false,
            statusValue: 15,
        },
        {
            title: "المصروفات",
            value: "2,351,000",
            icon: TrendingDown,
            status: true,
            statusValue: 34,
        },
        {
            title: "الديون",
            value: "210,500",
            icon: CreditCard,
            status: true,
            statusValue: 9.05,
        },
        {
            title: "المخزون",
            value: "40",
            icon: Package,
            status: false,
            statusValue: 17,
        }
    ];
    const recentWithdrawals = [
        {
            id: 1,
            name: "سالم احمد الصويل",
            date: "2024/12/26",
            amount: "2,100 ",
        },
        {
            id: 2,
            name: "محمد عبدالله بكير ",
            date: "2024/12/24",
            amount: "1,500 ",
        },
        {
            id: 3,
            name: "محمد فائز بكوره ",
            date: "2024/12/22",
            amount: "800 ",
        },
    ];
    const recentExpenses = [
        {
            id: 1,
            name: "فاتورة كهرباء",
            date: "2024/12/25",
            amount: "450 ",
        },
        {
            id: 2,
            name: "صيانة محل",
            date: "2024/12/23",
            amount: "1,200 ",
        },
        {
            id: 3,
            name: "مصاريف نقل",
            date: "2024/12/21",
            amount: "300 ",
        },
    ];
    const recentDebts = [
        {
            id: 1,
            name: "بقالة المدينه",
            date: "2024/12/24",
            amount: "650",
        },
        {
            id: 2,
            name: "بقالة الحمراء",
            date: "2024/12/22",
            amount: "1,000",
        },
        {
            id: 3,
            name: "كشك حمودي",
            date: "2024/12/20",
            amount: "400",
        },
    ];

    const date = new Date();
    return (
        <div className="mt-16 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-black/70 dark:text-light-text">لوحة التحكم</h1>
                        <p className="text-black/70 text-sm md:text-[16px] dark:text-light-text mt-2">نظرة عامة على الإحصائيات والأداء</p>
                    </div>
                    <p className="text-[16px] md:text-xl lg:text-2xl p-2  text-dark dark:text-light-text">{date.toLocaleDateString('ar-SA')}</p>
                </div>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} title={stat.title} value={stat.value} Icon={stat.icon} color={colors[index]} status={stat.status} statusValue={stat.statusValue} />
                    ))}
                </div>
                {/* Charts Section */}
                <div className="grid grid-cols-5 gap-2">
                    <div className="flex flex-col gap-4 col-span-5 lg:col-span-2 bg-light dark:bg-dark-content p-4 rounded-lg border border-border/30 dark:border-border/7 ">
                        {/* title */}
                        <div className="flex justify-between items-center text-black/70 dark:text-light-text">
                            <h3 className="text-sm md:text-base font-semibold">الربح</h3>
                            <div className="p-2 rounded-full bg-green-400/70 text-white">
                                <TrendingUp size={20} />
                            </div>
                        </div>
                        {/* chart */}
                        <ProfitChart colors={chartColors} />
                        {/* legend */}
                        <div className="flex justify-center gap-4 text-sm">
                            <Legend color={chartColors[0]} label="المبيعات" />
                            <Legend color={chartColors[1]} label="المسحوبات" />
                            <Legend color={chartColors[2]} label="المصروفات" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 col-span-5 lg:col-span-3 min-h-[300px] bg-light dark:bg-dark-content rounded-lg border border-border/30 dark:border-border/7 ">
                        {/* title */}
                        <div className="flex justify-between p-4 pb-2 items-center text-black/70 dark:text-light-text">
                            <h3 className="text-sm md:text-base font-semibold">الأكثر مبيعاً</h3>
                            <div className="p-2 rounded-full bg-blue-400/90 text-white">
                                <BarChart2 size={20} />
                            </div>
                        </div>
                        {/* chart */}
                        <SellingChart />
                    </div>
                </div>
                {/* recent transaction */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                    <div className="flex flex-col gap-4 p-2 bg-light dark:bg-dark-content rounded-lg border border-border/30 dark:border-border/7">
                        <div className="flex justify-between p-2 pb-0 items-center text-black/70 dark:text-light-text">
                            <h3 className="text-sm md:text-base font-semibold">احدث المسحوبات</h3>
                            <div className="p-2 rounded-full bg-green-400/90 text-white">
                                <Receipt size={20} />
                            </div>
                        </div>
                        <RecentsCard
                            recenetTransaction={recentWithdrawals}
                            color="green"
                        />
                    </div>
                    <div className="flex flex-col gap-4 p-2 bg-light dark:bg-dark-content rounded-lg border border-border/30 dark:border-border/7">
                        <div className="flex justify-between p-2 pb-0 items-center text-black/70 dark:text-light-text">
                            <h3 className="text-sm md:text-base font-semibold">احدث المصروفات</h3>
                            <div className="p-2 rounded-full bg-red-400/90 text-white">
                                <ArrowDownCircle size={20} />
                            </div>
                        </div>
                        <RecentsCard
                            recenetTransaction={recentExpenses}
                            color="red"
                        />
                    </div>
                    <div className="flex flex-col gap-4 p-2 bg-light dark:bg-dark-content rounded-lg border border-border/30 dark:border-border/7">
                        <div className="flex justify-between p-2 pb-0 items-center text-black/70 dark:text-light-text">
                            <h3 className="text-sm md:text-base font-semibold">احدث الديون</h3>
                            <div className="p-2 rounded-full bg-yellow-400/90 text-white">
                                <HandCoins size={20} />
                            </div>
                        </div>
                        <RecentsCard
                            recenetTransaction={recentDebts}
                            color="yellow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;