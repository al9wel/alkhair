

import type { Color } from "@/types/globals";

type RecenetTransactionProps = {
    id: number | string;
    name: string;
    date: string;
    amount: string;
};

const colorStyles = {
    green: {
        gradient: "from-green-500/10 to-transparent",
        text: "text-green-600",
    },
    red: {
        gradient: "from-red-500/10 to-transparent",
        text: "text-red-600",
    },
    yellow: {
        gradient: "from-yellow-500/10 to-transparent",
        text: "text-yellow-600",
    },
    blue: {
        gradient: "from-blue-500/10 to-transparent",
        text: "text-blue-600",
    },
    purple: {
        gradient: "from-purple-500/10 to-transparent",
        text: "text-purple-600",
    },
};
type RecentsCardProps = {
    recenetTransaction: RecenetTransactionProps[];
    color?: Color;
};


export default function RecentsCard({ recenetTransaction, color }: RecentsCardProps) {
    const style = colorStyles[color ? color : "green"];

    return (

        <div className="space-y-2">
            {recenetTransaction.length ? (
                recenetTransaction.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center justify-between rounded-xl p-3 bg-gradient-to-l ${style.gradient}`}
                    >
                        <div>
                            <p className="text-sm md:max-w-30 lg:max-w-40 xl:max-w-65 font-semibold text-zinc-800 dark:text-white">
                                {item.name}
                            </p>
                            <p className="text-xs text-zinc-400">
                                {item.date}
                            </p>
                        </div>

                        <span className={`text-sm font-bold ${style.text}`}>
                            {item.amount}
                        </span>
                    </div>
                ))
            ) : (
                <p className="text-sm text-center text-zinc-400 p-10">
                    لا توجد بيانات
                </p>
            )}
        </div>
    );
}
