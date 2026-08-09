// streak stat component for intro page
export default function StreakStat({ days }) {
    return (
        <span
            className="inline-flex items-center gap-1.5 px-2.5 py-0.2 rounded-full bg-blue-500/10 border border-blue-500/20
            text-blue-400 font-semibold text-[15px]"
        >
            <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-blue-400" />
            </span>

            {days} days
        </span>
    );
}