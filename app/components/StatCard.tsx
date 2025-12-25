
import type { LucideIcon } from "lucide-react";


const colorMap = {
    green: { bg: "bg-green-100/80 dark:bg-green-800/20", icon: "text-green-600 " },
    red: { bg: "bg-red-100/80 dark:bg-red-800/20", icon: "text-red-600 " },
    yellow: { bg: "bg-yellow-100/70 dark:bg-yellow-800/20", icon: "text-yellow-600 " },
    blue: { bg: "bg-blue-100/80 dark:bg-blue-800/20", icon: "text-blue-600 " },
    purple: { bg: "bg-purple-100/80 dark:bg-purple-800/20", icon: "text-purple-600" },
};

type Props = {
    title: string;
    value: string | number;
    Icon: LucideIcon;
    color: string;
};

const StatCard = ({ title, value, Icon, color = "blue" }: Props) => {
    const classes = colorMap[color];

    return (
        <div className={`p-6 rounded-2xl shadow-2xl shadow-border/40 dark:shadow-gray-800/20 border border-border/20  dark:border-border/10 ${classes.bg}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-black/80 dark:text-white/90">{title}</p>
                    <p className="text-2xl font-bold text-black dark:text-white mt-1">{value}</p>
                </div>
                <div className={`p-3 rounded-full bg-white/90  ${classes.icon}`}>
                    <Icon size={24} />
                </div>
            </div>
        </div>
    );
};

export default StatCard;
