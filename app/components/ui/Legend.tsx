const Legend = ({ color, label }: { color: string; label: string }) => (
    <div className="flex items-center gap-2 text-black/70 dark:text-light-text">
        <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
        />
        <span>{label}</span>
    </div>
);
export default Legend;