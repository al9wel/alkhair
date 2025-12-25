"use client";
import { DollarSign, TrendingDown, CreditCard, Package, BarChart3 } from "lucide-react";
import StatCard from "../components/StatCard";
import ProfitChart from "../components/ProfitChart";
import SellingChart from "../components/SellingChart";
// import CustomActiveShapePieChart from "./CustomActiveShapePieChart";

const DashboardPage = () => {
    // Placeholder data - replace with actual data later
    const stats = [
        {
            title: "المبيعات",
            value: "0",
            icon: BarChart3,
            color: "blue"
        },
        {
            title: "المسحوبات",
            value: "0",
            icon: DollarSign,
            color: "green"
        },
        {
            title: "المصروفات",
            value: "0",
            icon: TrendingDown,
            color: "red"
        },
        {
            title: "الديون",
            value: "0",
            icon: CreditCard,
            color: "yellow"
        },
        {
            title: "المخزون",
            value: "0",
            icon: Package,
            color: "purple"
        }
    ];
    const date = new Date();
    return (
        <div className="mt-16 p-6 bg-light dark:bg-dark min-h-screen">
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
                        <StatCard key={index} title={stat.title} value={stat.value} Icon={stat.icon} color={stat.color} />
                    ))}
                </div>
                {/* Charts Section */}
                {/* <div className="bg-light-content dark:bg-dark-content p-6 rounded-lg border border-border/50 dark:border-border/25 shadow-sm">
                    <h2 className="text-xl font-semibold text-black dark:text-white mb-4">الرسوم البيانية</h2>
                    <div className="h-96 flex items-center justify-center border-2 border-dashed border-border/50 dark:border-border/25 rounded-lg">
                        <div className="text-center text-black/50 dark:text-light-text/50">
                            <BarChart3 size={48} className="mx-auto mb-4" />
                            <p className="text-lg">مساحة الرسوم البيانية</p>
                            <p className="text-sm">أضف الرسوم البيانية هنا لاحقاً</p>
                        </div>
                    </div>
                </div> */}
                <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-5 lg:col-span-2 bg-light-content dark:bg-dark-content p-6 rounded-lg border border-border/50 dark:border-border/25 shadow-sm">
                        <ProfitChart />
                    </div>
                    <div className="col-span-5 lg:col-span-3 bg-light-content dark:bg-dark-content p-6 rounded-lg border border-border/50 dark:border-border/25 shadow-sm">
                        <SellingChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;