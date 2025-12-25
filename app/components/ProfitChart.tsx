"use client";

import { TrendingUp } from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";
import Legend from "./Legend";

const COLORS = {
    sales: "#60A5FA",
    expenses: "#F87171",
    withdrawals: "#FBBF24",
};

const ProfitChart = () => {
    const sales = 123500;
    const expenses = 53700;
    const withdrawals = 15800;

    const netProfit = sales - expenses - withdrawals;

    const data = [
        { name: "المبيعات", value: sales, color: COLORS.sales },
        { name: "المصروفات", value: expenses, color: COLORS.expenses },
        { name: "المسحوبات", value: withdrawals, color: COLORS.withdrawals },
    ];

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
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[260px] lg:max-w-[220px]">
                    <ResponsiveContainer width="100%" aspect={1}>
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="62%"
                                outerRadius="82%"
                                paddingAngle={3}
                                dataKey="value"
                            >
                                {data.map((item, index) => (
                                    <Cell key={index} fill={item.color} />
                                ))}
                            </Pie>

                            {/* النص في المنتصف */}
                            <text
                                x="50%"
                                y="45%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{
                                    fontSize: "clamp(12px, 2.5vw, 14px)",
                                    fill: "#6B7280",
                                }}
                            >
                                صافي الربح
                            </text>

                            <text
                                x="50%"
                                y="55%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{
                                    fontSize: "clamp(16px, 3vw, 16px)",
                                    fontWeight: 700,
                                    fill: netProfit >= 0 ? "#16A34A" : "#DC2626",
                                }}
                            >
                                {netProfit.toLocaleString()}
                            </text>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* legend */}
            <div className="flex justify-center gap-4 text-sm">
                <Legend color={COLORS.sales} label="المبيعات" />
                <Legend color={COLORS.withdrawals} label="المسحوبات" />
                <Legend color={COLORS.expenses} label="المصروفات" />
            </div>
        </div>
    );
};


export default ProfitChart;
