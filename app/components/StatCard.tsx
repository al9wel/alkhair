
import type { LucideIcon } from "lucide-react";
import type { Color } from "@/types/globals";


const colorStyles = {
    green: { bg: "bg-green-100/80 dark:bg-green-950/40", icon: "text-green-600 " },
    red: { bg: "bg-red-100/80 dark:bg-red-950/20", icon: "text-red-600 " },
    yellow: { bg: "bg-yellow-100/70 dark:bg-yellow-950/30", icon: "text-yellow-600 " },
    blue: { bg: "bg-blue-100/80 dark:bg-blue-950/20", icon: "text-blue-600 " },
    purple: { bg: "bg-purple-100/80 dark:bg-purple-950/10", icon: "text-purple-600" },
};


type StatCardProps = {
    title: string;
    value: string | number;
    Icon: LucideIcon;
    color?: Color;
};

const StatCard = ({ title, value, Icon, color }: StatCardProps) => {
    const style = colorStyles[color ? color : "blue"];

    return (
        <div className={`p-6 rounded-2xl shadow-2xl shadow-border/40 dark:shadow-gray-800/20 border border-border/20  dark:border-border/10 ${style.bg}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-black/80 dark:text-white/90">{title}</p>
                    <p className="text-2xl font-bold text-black dark:text-white mt-1">{value}</p>
                </div>
                <div className={`p-3 rounded-full bg-white/90  ${style.icon}`}>
                    <Icon size={24} />
                </div>
            </div>
        </div>
    );
};

export default StatCard;
