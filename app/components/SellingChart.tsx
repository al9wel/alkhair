"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "العلاقي", value: 350, },
    { name: "الهناء", value: 200, },
    { name: "الثلج", value: 170, },
    { name: "العلاقي حار", value: 390, },

];
const SellingChart = () => {
    return (
        <div className="flex-1 w-full pr-6">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barSize={10}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e5e7eb"
                    />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                        contentStyle={{
                            borderRadius: "8px",
                            borderColor: "#e5e7eb",
                        }}
                    />
                    <Bar
                        dataKey="value"
                        fill="#60A5FA"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SellingChart;
