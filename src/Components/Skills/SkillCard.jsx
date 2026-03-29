// Individual skill card component
export default function SkillCard({ img, label }) {
    return (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl cursor-default bg-white/3 border border-white/6
        hover:bg-white/[0.07] hover:border-white/[0.14] hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 group max-[500px]:w-full">
            <div className="w-5.5 h-5.5 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-200"
                />
            </div>

            <span className="text-[#888888] group-hover:text-white text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200">
                {label}
            </span>
        </div>
    );
}