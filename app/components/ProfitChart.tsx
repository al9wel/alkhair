"use client";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";


const ProfitChart = ({ colors }: { colors: string[] }) => {

    const data = [
        { name: "المبيعات", value: 123500, },
        { name: "المسحوبات", value: 15800, },
        { name: "المصروفات", value: 53700, },
    ];

    const netProfit = data[0].value - data[1].value - data[2].value;

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[260px] lg:max-w-[220px]">
                <ResponsiveContainer width="100%" aspect={1}>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius="65%"
                            outerRadius="82%"
                            paddingAngle={3}
                            dataKey="value"
                            strokeWidth={0}
                        >
                            {data.map((item, index) => (
                                <Cell key={index} fill={colors[index]} />
                            ))}
                        </Pie>

                        {/* النص في المنتصف */}
                        <text
                            x="50%"
                            y="45%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{
                                fontSize: "clamp(16px, 2.5vw, 16px)",
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
                                fill: netProfit >= 0 ? "#399268" : "#a52e38",
                            }}
                        >
                            {netProfit.toLocaleString()}
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


export default ProfitChart;
