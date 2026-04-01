// hobby card component
export default function HobbyCard({ icon: Icon, title, desc, color, bg, border }) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl text-center bg-white/2 border border-white/6
            ${border} hover:bg-white/4 transition-all duration-200 group`}
        >
            <div
                className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
            >
                <Icon className={`text-[18px] ${color}`} />
            </div>

            <div>
                <h5 className="text-[13px] font-semibold text-white/80">
                    {title}
                </h5>

                <p className="text-[11px] font-mono text-white/50 uppercase tracking-widest mt-0.5">
                    {desc}
                </p>
            </div>
        </div>
    );
}