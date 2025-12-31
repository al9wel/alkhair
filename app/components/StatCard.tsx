
import { ArrowBigDown, ArrowDown, ArrowDown01, ArrowDownFromLine, ArrowUp, Percent, type LucideIcon } from "lucide-react";
import type { Color } from "@/types/globals";


const colorStyles = {
    green: { bg: "bg-green-100/80 dark:bg-green-800/20", icon: "text-green-600 dark:text-green-500 " },
    red: { bg: "bg-red-100/80 dark:bg-red-800/20", icon: "text-red-600 dark:text-red-500 " },
    yellow: { bg: "bg-yellow-100/70 dark:bg-yellow-950/40", icon: "text-yellow-600 dark:text-yellow-500 " },
    blue: { bg: "bg-blue-100/80 dark:bg-blue-950/40", icon: "text-blue-600 dark:text-blue-500 " },
    purple: { bg: "bg-purple-100/80 dark:bg-purple-950/40", icon: "text-purple-600 dark:text-purple-500" },
};


type StatCardProps = {
    title: string;
    value: string | number;
    Icon: LucideIcon;
    color?: Color;
    status: true | false;
    statusValue: string | number;
};

const StatCard = ({ title, value, Icon, color, status, statusValue }: StatCardProps) => {
    const style = colorStyles[color ? color : "blue"];


    return (
        <div className={`p-4.5  bg-light dark:bg-dark-content rounded-2xl overflow-hidden border border-border/30 dark:border-border/7`}>
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-black/80 dark:text-white/90">{title}</p>
                <div className={`p-2.5 rounded-full ${style.bg}  ${style.icon}`}>
                    <Icon size={23} />
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-bold text-black/80 dark:text-white/80 mt-1">{value}</p>
                <p className={`${status ? `${colorStyles.green.bg} text-green-600 dark:text-green-400` : `${colorStyles.red.bg} text-red-600 dark:text-red-400`} rounded-full py-0.5 px-2 flex justify-center items-center gap-2`}>
                    <span className="flex justify-center items-center font-bold text-sm">
                        <Percent size={15} />
                        {statusValue}
                    </span>
                    {status ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                </p>
            </div>
        </div >
    );
};

export default StatCard;
