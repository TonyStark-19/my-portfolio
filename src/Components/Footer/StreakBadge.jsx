// streak badge comoponent
export default function StreakBadge({ days }) {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/6 bg-white/3">
            {/* Pulsing dot */}
            <span className="relative flex items-center justify-center w-1.75 h-1.75">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-50" />
                <span className="relative rounded-full h-1.25 w-1.25 bg-orange-400" />
            </span>

            <span className="text-[11px] font-mono tracking-widest text-[#444444]">
                Building in public
            </span>

            <span className="w-px h-3 bg-white/8" />

            <span className="text-[11px] font-mono font-medium tracking-wider text-orange-400/80">
                {days}d
            </span>
        </div>
    );
}